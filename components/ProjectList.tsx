'use client';

import { Clock, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { ReelProject } from '@/types';

interface ProjectListProps {
  onSelectProject: (project: ReelProject) => void;
}

export default function ProjectList({ onSelectProject }: ProjectListProps) {
  // Mock projects - Em produção, estes virão da API
  const mockProjects: ReelProject[] = [
    {
      id: '1',
      templateId: '1',
      title: 'Lançamento de Produto',
      description: 'Novo produto chegando em breve! 🎉',
      videoUrl: 'https://example.com/video1.mp4',
      status: 'ready',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-16'),
    },
    {
      id: '2',
      templateId: '2',
      title: 'Receita do Dia',
      description: 'Aprenda a fazer o melhor bolo de chocolate! 🍰',
      status: 'processing',
      createdAt: new Date('2024-01-14'),
      updatedAt: new Date('2024-01-14'),
    },
    {
      id: '3',
      templateId: '3',
      title: 'Dicas de Viagem',
      description: 'Os melhores destinos para 2024 ✈️',
      videoUrl: 'https://example.com/video3.mp4',
      status: 'published',
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-12'),
    },
    {
      id: '4',
      templateId: '4',
      title: 'Treino do Dia',
      description: 'Exercícios para fortalecer o core 💪',
      status: 'draft',
      createdAt: new Date('2024-01-08'),
      updatedAt: new Date('2024-01-09'),
    },
  ];

  const getStatusColor = (status: ReelProject['status']) => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'published':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: ReelProject['status']) => {
    switch (status) {
      case 'ready':
        return 'Pronto';
      case 'processing':
        return 'Processando';
      case 'published':
        return 'Publicado';
      case 'draft':
        return 'Rascunho';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-4">
      {mockProjects.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Eye className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Nenhum projeto ainda
          </h3>
          <p className="text-gray-600 mb-6">
            Comece criando seu primeiro reel usando um template do Canva
          </p>
          <button className="instagram-gradient text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
            Criar Primeiro Reel
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>
                        Criado em{' '}
                        {new Date(project.createdAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    {project.status === 'published' && (
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>1.2k visualizações</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Editar projeto:', project.id);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Editar"
                  >
                    <Edit className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Excluir projeto:', project.id);
                    }}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    title="Excluir"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Mais opções');
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Mais opções"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
