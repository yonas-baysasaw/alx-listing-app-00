export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: Array<string>;
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
}

interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}
interface AddressProps {
  state: string;
  city: string;
  country: string;
}
