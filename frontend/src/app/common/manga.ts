import { Author } from './author';
import { Category } from './category';

export interface Manga {
  id: number;
  title: string;
  category: Category;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  authors: Author[];
}
