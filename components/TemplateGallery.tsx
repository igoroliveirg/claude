'use client';

import { useState } from 'react';
import { Search, Filter, Star, ExternalLink } from 'lucide-react';
import { CanvaTemplate } from '@/types';

interface TemplateGalleryProps {
  onSelectTemplate: (template: CanvaTemplate) => void;
}

export default function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock templates - Em produção, estes virão da API do Canva
  const mockTemplates: CanvaTemplate[] = [
    {
      id: '1',
      name: 'Fashion Reel Template',
      thumbnail: 'https://via.placeholder.com/400x711/833AB4/ffffff?text=Fashion+Reel',
      width: 1080,
      height: 1920,
      type: 'video',
      duration: 15,
    },
    {
      id: '2',
      name: 'Food & Recipe Template',
      thumbnail: 'https://via.placeholder.com/400x711/E1306C/ffffff?text=Food+Recipe',
      width: 1080,
      height: 1920,
      type: 'video',
      duration: 30,
    },
    {
      id: '3',
      name: 'Travel Adventure',
      thumbnail: 'https://via.placeholder.com/400x711/F77737/ffffff?text=Travel',
      width: 1080,
      height: 1920,
      type: 'video',
      duration: 20,
    },
    {
      id: '4',
      name: 'Fitness Motivation',
      thumbnail: 'https://via.placeholder.com/400x711/FCAF45/ffffff?text=Fitness',
      width: 1080,
      height: 1920,
      type: 'video',
      duration: 15,
    },
    {
      id: '5',
      name: 'Product Showcase',
      thumbnail: 'https://via.placeholder.com/400x711/833AB4/ffffff?text=Product',
      width: 1080,
      height: 1920,
      type: 'video',
      duration: 25,
    },
    {
      id: '6',
      name: 'Quote & Inspiration',
      thumbnail: 'https://via.placeholder.com/400x711/E1306C/ffffff?text=Quotes',
      width: 1080,
      height: 1920,
      type: 'video',
      duration: 10,
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'fashion', name: 'Moda' },
    { id: 'food', name: 'Comida' },
    { id: 'travel', name: 'Viagens' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'business', name: 'Negócios' },
  ];

  const filteredTemplates = mockTemplates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filtros</span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'instagram-gradient text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
            onClick={() => onSelectTemplate(template)}
          >
            {/* Thumbnail */}
            <div className="template-card relative">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity instagram-gradient text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Usar Template</span>
                </button>
              </div>
              {/* Duration Badge */}
              {template.duration && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                  {template.duration}s
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="p-3">
              <h3 className="font-semibold text-sm text-gray-900 truncate">
                {template.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">
                  {template.width} x {template.height}
                </span>
                <button className="text-yellow-500 hover:text-yellow-600">
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Connect to Canva CTA */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Conecte sua conta do Canva
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Acesse todos os seus templates personalizados e designs salvos
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Conectar Canva
          </button>
        </div>
      </div>
    </div>
  );
}
