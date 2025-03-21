

export interface Ibrand {
  results:  number;
  metadata: Metadata;
  data:     Datum[];
  _id:       string;
  name:      string;
  slug:      string;
  image:     string;
}

export interface Datum {
  _id:       string;
  name:      string;
  slug:      string;
  image:     string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  currentPage:   number;
  numberOfPages: number;
  limit:         number;
  nextPage:      number;
}


