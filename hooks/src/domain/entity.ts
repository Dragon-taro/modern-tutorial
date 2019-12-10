export interface HistoryElement {
  squares: ISquare[];
}
export type History = HistoryElement[];
export type ISquare = "X" | "O" | null;
