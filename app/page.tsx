'use client';

import { useState } from 'react';
import {
  Instagram,
  Video,
  Plus,
  Upload,
  Settings,
  Sparkles,
  PlayCircle,
  FileVideo,
  Layout
} from 'lucide-react';
import TemplateGallery from '@/components/TemplateGallery';
import ReelPreview from '@/components/ReelPreview';
import ProjectList from '@/components/ProjectList';
import { ReelProject } from '@/types';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'templates' | 'projects'>('templates');
  const [selectedProject, setSelectedProject] = useState<ReelProject | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-transparent instagram-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 instagram-gradient rounded-lg">
                <Video className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Reels Creator Pro
                </h1>
                <p className="text-sm text-gray-600">Powered by Canva</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {isConnected ? (
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                  <Instagram className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Conectado</span>
                </div>
              ) : (
                <button
                  onClick={() => setIsConnected(true)}
                  className="flex items-center space-x-2 instagram-gradient text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Conectar Instagram</span>
                </button>
              )}

              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Reels</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">12</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FileVideo className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Publicados</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">8</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <PlayCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Templates Salvos</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">24</p>
              </div>
              <div className="p-3 bg-pink-100 rounded-lg">
                <Layout className="w-8 h-8 text-pink-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setActiveTab('templates')}
              className="flex items-center justify-center space-x-3 instagram-gradient text-white px-6 py-4 rounded-lg hover:shadow-xl transition-all"
            >
              <Sparkles className="w-6 h-6" />
              <span className="font-semibold">Criar Novo Reel</span>
            </button>

            <button className="flex items-center justify-center space-x-3 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-lg transition-all">
              <Upload className="w-6 h-6" />
              <span className="font-semibold">Upload de Vídeo</span>
            </button>

            <button className="flex items-center justify-center space-x-3 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-lg transition-all">
              <Plus className="w-6 h-6" />
              <span className="font-semibold">Template Customizado</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'templates'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Layout className="w-5 h-5" />
                  <span>Templates do Canva</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'projects'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileVideo className="w-5 h-5" />
                  <span>Meus Projetos</span>
                </div>
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'templates' ? (
              <TemplateGallery onSelectTemplate={(template) => {
                console.log('Template selecionado:', template);
              }} />
            ) : (
              <ProjectList onSelectProject={setSelectedProject} />
            )}
          </div>
        </div>
      </main>

      {/* Preview Modal */}
      {selectedProject && (
        <ReelPreview
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
