import { Results } from "./Results"

export interface MovieResult {
    page: number
    results: Array<Results>
    total_pages: number
    total_results: number
  }
  