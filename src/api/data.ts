export interface Country {
  countryid: number;
  name: string;
}

export interface Company {
  companyid: number;
  name: string;
  country?: {
    name: string;
  } | null;
  brandname?: string | null;
  entitytype?: string | null;
  noindukberusaha?: string | null;
  npwp?: string | null;
  address?: string | null;
  telpno?: string | null;
  companyemail?: string | null;
  logo?: string | null;
  companydesign?: {
    name: string;
  } | null;
  reporttocompany?: {
    name: string;
  } | null;
}

export interface CompanyDesign {
  companydesignid: number;
  name: string;
  level: number;
}

export interface Tenant {
  tenantid: number;
  name: string;
  holdingflag: boolean | null;
  holdingcompanyid: number | null;
}

export interface BaseOrgStructure {
  baseorgstructureid: number;
  nama: string;
  ordeno: number;
}

export interface CompanyBaseOrgStruc {
  id: number;
  companyid: number;
  baseorgstructureid: number;
  selected: boolean;
}

export interface HRBaseRule {
  hrbaseruleid: number;
  grouprule: string;
  rulename: string;
}

export interface CompanyHRRule {
  companyhrruleid: number;
  companyid: number;
  hrbaseruleid: number;
  grouprule: string;
  rulename: string;
  selected: boolean;
}