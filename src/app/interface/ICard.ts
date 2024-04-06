export interface ICard {
  image: string;
  title: string;
  type: string;
  description: string;
  tier: string;
  tokenId: string;
  available: boolean;
  price: string | null;
  author: string;
}
