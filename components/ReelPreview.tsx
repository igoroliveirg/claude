'use client';

import { X, Download, Share2, Instagram, Edit, Trash2 } from 'lucide-react';
import { ReelProject } from '@/types';

interface ReelPreviewProps {
  project: ReelProject;
  onClose: () => void;
}

export default function ReelPreview({ project, onClose }: ReelPreviewProps) {
  const handlePublish = () => {
    // Implementar lógica de publicação no Instagram
    console.log('Publicando reel:', project.id);
  };

  const handleDownload = () => {
    // Implementar lógica de download
    console.log('Baixando reel:', project.id);
  };

  const handleEdit = () => {
    // Abrir editor do Canva
    console.log('Editando reel:', project.id);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Preview Area */}
          <div className="lg:w-1/2 bg-gray-900 flex items-center justify-center p-8">
            <div className="relative">
              {/* Video Preview */}
              <div className="w-full max-w-sm aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
                    <div className="text-center text-white p-6">
                      <Instagram className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Processando vídeo...</p>
                      <p className="text-sm mt-2 opacity-80">
                        Seu reel será processado em breve
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details Area */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Status */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Status
                </label>
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'ready'
                        ? 'bg-green-100 text-green-800'
                        : project.status === 'processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : project.status === 'published'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {project.status === 'ready' && 'Pronto para publicar'}
                    {project.status === 'processing' && 'Processando'}
                    {project.status === 'published' && 'Publicado'}
                    {project.status === 'draft' && 'Rascunho'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Descrição
                </label>
                <textarea
                  defaultValue={project.description}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Adicione uma descrição para o seu reel..."
                />
              </div>

              {/* Hashtags */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Hashtags
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="#reels #instagram #viral"
                />
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Criado em:</span>
                  <span className="font-medium text-gray-900">
                    {new Date(project.createdAt).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Atualizado em:</span>
                  <span className="font-medium text-gray-900">
                    {new Date(project.updatedAt).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Template ID:</span>
                  <span className="font-medium text-gray-900">
                    {project.templateId}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t p-6 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleEdit}
                  className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <Edit className="w-5 h-5" />
                  <span>Editar</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Baixar</span>
                </button>
              </div>

              {project.status === 'ready' && (
                <button
                  onClick={handlePublish}
                  className="w-full instagram-gradient text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Publicar no Instagram</span>
                </button>
              )}

              <button className="w-full flex items-center justify-center space-x-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition-colors">
                <Trash2 className="w-5 h-5" />
                <span>Excluir Projeto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
