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
  tenantid?: number;
}

export interface Tenant {
  tenantid: number;
  name: string;
  holdingflag: boolean | null;
  holdingcompanyid: number | null;
}

export interface CompanyDesign {
  companydesignid: number;
  name: string;
  level: number;
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

export interface DaftarCuti {
  daftarcutiid: number;
  deskripsi: string;
}

export interface DaftarIzin {
  daftarizinid: number;
  deskripsi: string;
}

export interface CompanyCuti {
  companycutiid: number;
  companyid: number;
  daftarcutiid: number;
  deskripsi: string;
  jumlahhari: number;
}

export interface CompanyIzin {
  companyizinid: number;
  companyid: number;
  daftarizinid: number;
  deskripsi: string;
  jumlahhari: number;
}

export interface HariLiburNasional {
  hariliburnasid: number;
  startdate: string;
  enddate: string;
  namatanggal: string;
  active: boolean;
}

export interface CompLiburNasional {
  compliburnasionalid: number;
  companyid: number;
  hariliburnasid: number;
  startdate: string;
  enddate: string;
  namatanggal: string;
  potongcutitahunan: boolean | undefined | null;
  dokumenfilename: string;
  dokumen_url?: string | null;
}

export interface WorkingHours {
  companyworkinghoursid: number;
  companyid: number;
  tipejadwal: string;
  kategori: string;
  skema: string;
  durasi: number;
  durasiistirahat: number;
  jammasuk: string;
  jamkeluar: string;
  kodeshift: string;
}

export interface WorkingBreak {
  id: number;
  companyworkinghoursid: number;
  starttime: string;
  endtime: string;
}

export interface Menu {
  menuid: number;
	companyid: number;
	menuname: string;
	parentmenuid: number;
	ordersequence?: number;
	menutype?: string;
	hrgroup: boolean;
	grouprole: string;
  grouprole_ids?: number[];
	active: boolean;
}

export interface GroupRole {
  grouproleid: number;
	grouprolecode: string;
	grouprolename: string;
	active: boolean;
}

export interface CompanyDirectorate {
  companydirectorateid: number;
  companyid: number;
  directoratename: string;
  active: boolean;
  divisions: CompanyDivision[];
}

export interface CompanyDivision {
  companydivisionid: number;
  companydirectorateid: number;
  companyid: number;
  divisionname: string;
  active: boolean;
  departments: CompanyDepartment[];
}

export interface CompanyDepartment {
  companydepartmentid: number;
  companydivisionid: number;
  companyid: number;
  departmentname: string;
  active: boolean;
  unit_kerjas: CompanyUnitKerja[];
}

export interface CompanyUnitKerja {
  companyunitkerjaid: number;
  companydepartmentid: number;
  companyid: number;
  unitkerjaname: string;
  dokumenname?: string | null;
  dokumenfilename?: string | null;
  dokumen_url?: string | null;
  active: boolean;
}