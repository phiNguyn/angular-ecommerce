export interface address {
    id: number,
              name: string,
              type: number,
              typeText: string,
              slug: string
}

export interface district{
    id: number,
    name:number
    provinceId: number
}

export interface wards{
    id: number
    name: string
    districtId: number
    
}