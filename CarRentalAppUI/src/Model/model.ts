export interface addAdminProductTable {

  userID: number;

  firstName: string;

  lastName: string;

  email: string;

  mobile: string;

  gender: string;

  pwd: string;


}

export interface ProductDetails {
  id: number;
  title: string;
  description: string;
  Category: string;
  offer: number;
  price: number;
  quantity: number;
  imageName: string;
}

export interface Cart {

  productId: number;
  product: ProductDetails; // Assuming you have a Product interface as well
  temp2: string;

}

export interface CarDetails {

  vehicleId: number
  maker: string
  model: string
  rentalPrice: string
  availabilityStatus: string
  carImage:string

}

export interface Login{
  userId:number
  name:string
  email:string
  password:string
  phoneNumber:string
  address:string

}

export interface AllRentalCarDetailsSave{
        rentalAgreementId:number
        vehicleId:number
        maker:string
        model:string
        rentalPrice:string
        
        carImage:string
        userId:number
        name:string
        email:string
       
        phoneNumber:string
        address:string
        startRentalDuration:number
        endRentalDuration:number
        isReturned:string
        requestForReturn:string
        
}
export interface RentalCarDetailsSave{
  logindata:Login[],
  startDate:number,
  endDate:number,
  carDetailsdata:CarDetails[]
}