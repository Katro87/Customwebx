
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  priceRange: string;
  icon: string;
}

export enum MessageRole {
  USER = 'user',
  ASSISTANT = 'assistant'
}

export interface ChatMessage {
  role: MessageRole;
  content: string;
  timestamp: Date;
}
