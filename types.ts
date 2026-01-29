export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  CAD = 'CAD',
  AUD = 'AUD'
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum PaySchedule {
  WEEKLY = 'Weekly',
  BIWEEKLY = 'Biweekly',
  MONTHLY = 'Monthly'
}

export interface Transaction {
  id: string;
  amount: number;
  merchant: string;
  date: string; // ISO String
  category: string;
  type: 'expense' | 'income' | 'extra_income' | 'savings';
  isHoliday?: boolean;
  isReceiptData?: boolean;
  notes?: string;
}

export interface UserSettings {
  name: string;
  currency: Currency;
  monthlyIncome: number;
  fixedBills: number;
  savingsGoal: number;
  paySchedule: PaySchedule;
  theme: Theme;
  includeReceiptInsights: boolean;
  hasCompletedOnboarding: boolean;
}

export interface AppState {
  settings: UserSettings;
  transactions: Transaction[];
}

export const DEFAULT_SETTINGS: UserSettings = {
  name: '',
  currency: Currency.USD,
  monthlyIncome: 0,
  fixedBills: 0,
  savingsGoal: 0,
  paySchedule: PaySchedule.MONTHLY,
  theme: Theme.LIGHT,
  includeReceiptInsights: true,
  hasCompletedOnboarding: false,
};