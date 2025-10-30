export interface CanvaTemplate {
  id: string;
  name: string;
  thumbnail: string;
  width: number;
  height: number;
  type: 'video' | 'image';
  duration?: number;
}

export interface ReelProject {
  id: string;
  templateId: string;
  title: string;
  description: string;
  videoUrl?: string;
  status: 'draft' | 'processing' | 'ready' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface InstagramAccount {
  id: string;
  username: string;
  profilePicture: string;
  isConnected: boolean;
}

export interface CanvaDesignResponse {
  id: string;
  url: string;
  exportUrl?: string;
  thumbnail?: string;
}
