export default interface ICheckout {
    image: string;
    author: string;
    title: string;
    price: string;
    setCheckOut: React.Dispatch<React.SetStateAction<boolean>>;
    isCheckOut: boolean;
}