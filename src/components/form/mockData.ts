export const packingList = [
  {
    order: 1,
    options: ["Shipper", "Exporter", "Door", "직접입력"],
    category: "address",
    title: "",
    value: {
      companyNm: "",
      address: "",
      addressDetail: "",
      tel: "",
      email: "",
      etc: ""
    }
  },
  {
    order: 2,
    options: ["Consignee", "Importer", "Door", "직접입력"],
    category: "address",
    title: "",
    value: {
      companyNm: "",
      address: "",
      addressDetail: "",
      tel: "",
      email: "",
      etc: ""
    }
  },
  {
    order: 3,
    options: ["Notify party", "Same as above", "직접입력"],
    category: "address",
    title: "",
    value: {
      companyNm: "",
      address: "",
      addressDetail: "",
      tel: "",
      email: "",
      etc: ""
    }
  },
  {
    order: 4,
    options: ["Port of Loading", "From", "직접입력"],
    category: "portInfo",
    title: "",
    value:"",
  },
  {
    order: 5,
    options: ["Port of Discharging", "To", "직접입력"],
    category: "portInfo",
    title: "",
    value:"",
  },
  {
    order: 6,
    options: ["Vessel & Voy", "Flight#", "직접입력"],
    category: "departureInfo",
    title: "",
    value:"",
  },
  {
    order: 7,
    options: ["Sailing on or about", "Departure date", "직접입력"],
    category: "departureInfo",
    title: "",
    value:"",
  },
  {
    order: 8,
    options: ["No. & date of invoice"],
    category: "invoice",
    title: "",
    value:"",
  },
  {
    order: 9,
    options: ["L/C No. and date", "직접입력"],
    category: "lc",
    title: "",
    value:"",
  },
  {
    order: 10,
    options: ["L/C Issuing Bank", "직접입력"],
    category: "lc",
    title: "",
    value:"",
  },
  {
    order: 11,
    options: ["Terms of Delivery and payment", "직접입력"],
    category: "payment",
    title: "",
    value:"",
  },
  {
    order: 12,
    options: ["Remarks"],
    category: "remark",
    title: "",
    value:"",
  },
  {
    order: 13,
    options: ["RemShipping Mark"],
    category: "remark",
    title: "",
    value:"",
  }
];

export interface AddressInfoSection {
  order: number,
  options: Array<string>,
  category: string,
  title: string,
  value: AddressInfo | string
}

export interface AddressInfo {
  companyNm: string,
  address: string,
  addressDetail: string,
  tel: string,
  email: string,
  etc: string,
}