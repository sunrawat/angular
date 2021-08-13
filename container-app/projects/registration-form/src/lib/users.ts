export interface Users {
  page: number;
  per_page: number,
  total:  number,
  total_pages: number,
  data:  user[]
}

export interface user {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}
