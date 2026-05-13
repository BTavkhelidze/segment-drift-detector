export class CreateCustomerDto {
  name: String;

  email: string;
  
  metadata?: Record<string, unknown>;
}