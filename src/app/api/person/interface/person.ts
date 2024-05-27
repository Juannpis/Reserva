export interface PersonAPI {
  personId: string
  identificationType: string
  id_number: string
  firstName: string
  lastName: string
  genre: string
  birthDate: string
  phoneNumber: string
  country: string
  province: string
  city: string
  mail: string
  password: string
}

export interface Person {
  type: string
  id_doc: string
  name: string
  lastname: string
  mail: string
  phone: string
  contact_name: string
  contact_lastname: string
  contact_phone: string
}
