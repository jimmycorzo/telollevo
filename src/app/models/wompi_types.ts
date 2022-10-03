export class FinancialInstitutionModel {
  financial_institution_code: string;
  financial_institution_name: string;
  constructor() {
  }
}

export class TransactionsModel {
  id: string;
  created_at: string;
  amount_in_cents: number;
  status: string;
  reference: string;
  customer_email: string;
  currency: string;
  payment_method_type: string;
  payment_method: string;
  shipping_address: string;
  redirect_url: string;
  payment_link_id: string;
  constructor() {
  }
}
