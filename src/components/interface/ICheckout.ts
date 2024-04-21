export default interface ICheckout {
  tokenId: string;
  image: string;
  author: string;
  title: string;
  price: string;
  setCheckOut: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckOut: boolean;
}
