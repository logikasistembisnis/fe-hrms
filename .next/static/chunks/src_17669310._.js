(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/api/companyApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCompany",
    ()=>deleteCompany,
    "getCompanies",
    ()=>getCompanies,
    "saveCompany",
    ()=>saveCompany,
    "saveCompanyDesign",
    ()=>saveCompanyDesign,
    "saveCompanyDetails",
    ()=>saveCompanyDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id");
const getCompanies = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/company"));
    return response.data;
};
const saveCompany = async (companies)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/company"), companies, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const saveCompanyDetails = async (id, formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_BASE, "/company/").concat(id, "/details"), formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const saveCompanyDesign = async (companies)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/company/companydesign"), companies, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const deleteCompany = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE, "/company/").concat(id));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/countryApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCountries",
    ()=>getCountries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id") || "http://localhost:8000";
const getCountries = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/country"));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/tenantApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteTenant",
    ()=>deleteTenant,
    "getTenant",
    ()=>getTenant,
    "saveTenant",
    ()=>saveTenant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id") || "http://localhost:8000";
const getTenant = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/tenant/").concat(id));
    return response.data;
};
const saveTenant = async (tenant)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/tenant"), tenant, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const deleteTenant = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE, "/tenant/").concat(id));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormCompany.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormCompany
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$countryApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/countryApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$tenantApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/tenantApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Default value
const defaultTenant = {
    tenantid: 1,
    name: "",
    description: null,
    holdingflag: null,
    holdingcompanyid: null,
    active: true
};
function FormCompany(param) {
    let { onNextStep } = param;
    _s();
    const [companiesFromAPI, setCompaniesFromAPI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [localCompanies, setLocalCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tenant, setTenant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasHolding, setHasHolding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dataloading, setDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormCompany.useEffect": ()=>{
            const fetchData = {
                "FormCompany.useEffect.fetchData": async ()=>{
                    setDataLoading(true);
                    setError(null);
                    try {
                        var _companyRes_value, _countryRes_value, _tenantRes_value;
                        const results = await Promise.allSettled([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$countryApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountries"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$tenantApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTenant"])(1)
                        ]);
                        const [companyRes, countryRes, tenantRes] = results;
                        // 1. Handle Companies
                        let companies = [];
                        if (companyRes.status === "fulfilled" && ((_companyRes_value = companyRes.value) === null || _companyRes_value === void 0 ? void 0 : _companyRes_value.data)) {
                            companies = (companyRes.value.data || []).sort({
                                "FormCompany.useEffect.fetchData": (a, b)=>b.companyid - a.companyid
                            }["FormCompany.useEffect.fetchData"]);
                        } else {
                            const saved = localStorage.getItem("companiesFromAPI");
                            companies = saved ? JSON.parse(saved) : [];
                        }
                        setCompaniesFromAPI(companies);
                        localStorage.setItem("companiesFromAPI", JSON.stringify(companies));
                        // 2. Handle Countries
                        let countryList = [];
                        if (countryRes.status === "fulfilled" && ((_countryRes_value = countryRes.value) === null || _countryRes_value === void 0 ? void 0 : _countryRes_value.data)) {
                            countryList = countryRes.value.data || [];
                        } else {
                            const saved = localStorage.getItem("countries");
                            countryList = saved ? JSON.parse(saved) : [];
                        }
                        setCountries(countryList);
                        // 3. Handle Tenant (PERBAIKAN UTAMA DISINI)
                        if (tenantRes.status === "fulfilled" && ((_tenantRes_value = tenantRes.value) === null || _tenantRes_value === void 0 ? void 0 : _tenantRes_value.data)) {
                            // Backend return OBJECT, bukan ARRAY
                            const t = tenantRes.value.data;
                            if (t) {
                                setTenant(t);
                                // Set dropdown logic
                                setHasHolding(t.holdingflag === true ? "Ya" : t.holdingflag === false ? "Tidak" : "");
                            } else {
                                setTenant(null);
                                setHasHolding("");
                            }
                        } else {
                            // Jika request gagal atau data kosong
                            setTenant(null);
                            setHasHolding("");
                        }
                        const savedLocal = localStorage.getItem("localCompanies");
                        setLocalCompanies(savedLocal ? JSON.parse(savedLocal) : []);
                        const allRejected = results.every({
                            "FormCompany.useEffect.fetchData.allRejected": (r)=>r.status === "rejected"
                        }["FormCompany.useEffect.fetchData.allRejected"]);
                        if (allRejected) setError("Gagal memuat data perusahaan/tenant (semua request gagal).");
                    } catch (err) {
                        console.error("Unexpected error saat fetchData:", err);
                        setError("Gagal memuat data perusahaan/tenant (kesalahan tidak terduga).");
                    } finally{
                        setDataLoading(false);
                    }
                }
            }["FormCompany.useEffect.fetchData"];
            fetchData();
        }
    }["FormCompany.useEffect"], []);
    // --- FUNGSI LAIN TIDAK BERUBAH ---
    const handleDelete = async (id, source)=>{
        if (!confirm("Apakah Anda yakin ingin menghapus perusahaan ini?")) return;
        try {
            if (source === "api") {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCompany"])(id);
                const updated = companiesFromAPI.filter((c)=>c.companyid !== id);
                setCompaniesFromAPI(updated);
                localStorage.setItem("companiesFromAPI", JSON.stringify(updated));
            } else {
                const updated = localCompanies.filter((c)=>c.companyid !== id);
                setLocalCompanies(updated);
                localStorage.setItem("localCompanies", JSON.stringify(updated));
            }
        } catch (err) {
            alert(err instanceof Error ? err.message : "Gagal menghapus perusahaan");
        }
    };
    const handleAdd = ()=>{
        const newCompany = {
            companyid: -(Math.floor(Math.random() * 100000) + 1),
            name: "",
            country: {
                name: ""
            }
        };
        const updated = [
            newCompany,
            ...localCompanies
        ];
        setLocalCompanies(updated);
        localStorage.setItem("localCompanies", JSON.stringify(updated));
    };
    const handleLocalChange = (id, field, value)=>{
        const updated = localCompanies.map((c)=>c.companyid === id ? field === "name" ? {
                ...c,
                name: value
            } : {
                ...c,
                country: {
                    name: value
                }
            } : c);
        setLocalCompanies(updated);
        localStorage.setItem("localCompanies", JSON.stringify(updated));
    };
    const handleAPIChange = (id, field, value)=>{
        const updated = companiesFromAPI.map((c)=>c.companyid === id ? field === "name" ? {
                ...c,
                name: value
            } : {
                ...c,
                country: {
                    name: value
                }
            } : c);
        setCompaniesFromAPI(updated);
        localStorage.setItem("companiesFromAPI", JSON.stringify(updated));
    };
    const allCompanies = [
        ...localCompanies,
        ...companiesFromAPI
    ];
    const validateBeforeSubmit = ()=>{
        const errs = [];
        if (allCompanies.length === 0) {
            errs.push("Anda harus menambahkan minimal satu perusahaan (PT).");
        }
        allCompanies.forEach((c, idx)=>{
            var _c_country;
            if (!c.name || c.name.trim() === "") errs.push("Nama perusahaan (PT) pada baris ".concat(idx + 1, " wajib diisi."));
            if (!((_c_country = c.country) === null || _c_country === void 0 ? void 0 : _c_country.name) || c.country.name.trim() === "") errs.push("Negara perusahaan pada baris ".concat(idx + 1, " wajib dipilih."));
        });
        if (hasHolding === "") errs.push("Silakan pilih apakah perusahaan memiliki holding company (Ya/Tidak).");
        if (hasHolding === "Ya") {
            const selected = tenant === null || tenant === void 0 ? void 0 : tenant.holdingcompanyid;
            if (selected == null || selected === 0) {
                errs.push("Anda memilih 'Ya' untuk holding — wajib pilih nama perusahaan holding.");
            }
        }
        setValidationErrors(errs);
        return errs.length === 0;
    };
    const handleSubmit = async ()=>{
        setValidationErrors([]);
        if (!validateBeforeSubmit()) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }
        try {
            setLoading(true);
            // Logic Save Company
            const payload = allCompanies.map((company)=>{
                const countryObj = countries.find((ct)=>{
                    var _company_country;
                    return ct.name === ((_company_country = company.country) === null || _company_country === void 0 ? void 0 : _company_country.name);
                });
                var _countryObj_countryid;
                return {
                    companyid: company.companyid > 0 ? company.companyid : undefined,
                    name: company.name,
                    countryid: (_countryObj_countryid = countryObj === null || countryObj === void 0 ? void 0 : countryObj.countryid) !== null && _countryObj_countryid !== void 0 ? _countryObj_countryid : null,
                    tenantid: 1
                };
            });
            const rawResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompany"])(payload);
            const backendData = rawResponse;
            const savedCompanies = (backendData.results || []).map((item)=>item.data);
            // Logic ID Holding
            let finalHoldingCompanyId = null;
            if (hasHolding === "Ya") {
                var _tenant_holdingcompanyid;
                const selectedTempId = (_tenant_holdingcompanyid = tenant === null || tenant === void 0 ? void 0 : tenant.holdingcompanyid) !== null && _tenant_holdingcompanyid !== void 0 ? _tenant_holdingcompanyid : null;
                if (selectedTempId) {
                    if (selectedTempId > 0) {
                        finalHoldingCompanyId = selectedTempId;
                    } else {
                        const tempCompanyData = allCompanies.find((c)=>c.companyid === selectedTempId);
                        if (tempCompanyData) {
                            const matchedSavedCompany = savedCompanies.find((sc)=>sc.name.trim().toLowerCase() === tempCompanyData.name.trim().toLowerCase());
                            if (matchedSavedCompany) {
                                finalHoldingCompanyId = matchedSavedCompany.companyid;
                            } else {
                                throw new Error("Gagal menyimpan holding: Perusahaan '".concat(tempCompanyData.name, "' tidak ditemukan di respon server."));
                            }
                        }
                    }
                }
            }
            const currentTenantData = tenant !== null && tenant !== void 0 ? tenant : defaultTenant;
            // Logic Save Tenant (Upsert via Array)
            const tenantPayload = {
                ...currentTenantData,
                tenantid: 1,
                holdingflag: hasHolding === "Ya",
                holdingcompanyid: finalHoldingCompanyId,
                active: true
            };
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$tenantApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveTenant"])([
                    tenantPayload
                ]);
            } catch (tenantErr) {
                console.error("Gagal update tenant:", tenantErr);
                throw new Error("Data perusahaan tersimpan, tetapi gagal update status holding.");
            }
            alert("Data perusahaan dan tenant berhasil disimpan!");
            const serverCompanies = savedCompanies.filter((c)=>c && c.companyid > 0).sort((a, b)=>b.companyid - a.companyid);
            setCompaniesFromAPI(serverCompanies);
            localStorage.setItem("companiesFromAPI", JSON.stringify(serverCompanies));
            setLocalCompanies([]);
            localStorage.removeItem("localCompanies");
            onNextStep();
        } catch (err) {
            console.error(err);
            alert(err instanceof Error ? err.message : "Gagal menyimpan data perusahaan atau tenant");
        } finally{
            setLoading(false);
        }
    };
    if (dataloading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-6",
        children: "Loading data perusahaan..."
    }, void 0, false, {
        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
        lineNumber: 260,
        columnNumber: 27
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-6 text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
        lineNumber: 261,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            validationErrors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 mb-4 bg-red-50 border border-red-200 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "text-red-700",
                        children: "Perbaiki kesalahan berikut:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-2 list-disc list-inside text-sm text-red-600",
                        children: validationErrors.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: v
                            }, i, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 269,
                                columnNumber: 45
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Informasi Perusahaan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-lg mb-3",
                                children: "1. Sebutkan nama perusahaan dan negara tempat beroperasi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAdd,
                                className: "flex items-center gap-2 mb-4 px-4 py-2 bg-[#0c356a] text-white rounded-full cursor-pointer",
                                children: "Tambah"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    localCompanies.map((company)=>{
                                        var _company_country;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Nama perusahaan",
                                                    value: company.name,
                                                    onChange: (e)=>handleLocalChange(company.companyid, "name", e.target.value),
                                                    className: "py-2 px-3 flex-1 min-w-[150px] bg-gray-100 rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ((_company_country = company.country) === null || _company_country === void 0 ? void 0 : _company_country.name) || "",
                                                    onChange: (e)=>handleLocalChange(company.companyid, "country", e.target.value),
                                                    className: "py-2 px-3 flex-1 min-w-[180px] bg-gray-100 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Pilih Negara"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 19
                                                        }, this),
                                                        countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: country.name,
                                                                children: country.name
                                                            }, country.countryid, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 47
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDelete(company.companyid, "local"),
                                                    className: "bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800",
                                                    children: "Hapus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, company.companyid, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this);
                                    }),
                                    companiesFromAPI.map((company)=>{
                                        var _company_country;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: company.name || "",
                                                    onChange: (e)=>handleAPIChange(company.companyid, "name", e.target.value),
                                                    className: "py-2 px-3 flex-1 min-w-[150px] bg-gray-100 rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: ((_company_country = company.country) === null || _company_country === void 0 ? void 0 : _company_country.name) || "",
                                                    onChange: (e)=>handleAPIChange(company.companyid, "country", e.target.value),
                                                    className: "py-2 px-3 flex-1 min-w-[180px] bg-gray-100 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Pilih Negara"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 19
                                                        }, this),
                                                        countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: country.name,
                                                                children: country.name
                                                            }, country.countryid, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 47
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDelete(company.companyid, "api"),
                                                    className: "bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800",
                                                    children: "Hapus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, company.companyid, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium mb-3",
                                children: "2. Apakah perusahaan anda memiliki holding company?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border p-2 rounded-md w-full mb-4",
                                value: hasHolding,
                                onChange: (e)=>{
                                    const newVal = e.target.value;
                                    setHasHolding(newVal);
                                    setTenant((prev)=>{
                                        const current = prev !== null && prev !== void 0 ? prev : defaultTenant;
                                        if (newVal === "Tidak" || newVal === "") {
                                            return {
                                                ...current,
                                                holdingflag: false,
                                                holdingcompanyid: null
                                            };
                                        } else {
                                            return {
                                                ...current,
                                                holdingflag: true
                                            };
                                        }
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Pilih"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Ya",
                                        children: "Ya"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Tidak",
                                        children: "Tidak"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium mb-3",
                                children: "Sebutkan nama perusahaannya"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border p-2 rounded-md w-full",
                                disabled: hasHolding === "Tidak" || hasHolding === "",
                                // Tetap gunakan String() agar ID 2 (number) cocok dengan "2" (value option)
                                value: (tenant === null || tenant === void 0 ? void 0 : tenant.holdingcompanyid) ? String(tenant.holdingcompanyid) : "",
                                onChange: (e)=>{
                                    const val = e.target.value === "" ? null : Number(e.target.value);
                                    setTenant((prev)=>({
                                            ...prev !== null && prev !== void 0 ? prev : defaultTenant,
                                            holdingcompanyid: val
                                        }));
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Pilih Perusahaan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    allCompanies.map((c)=>// Tetap gunakan String()
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: String(c.companyid),
                                            children: c.name || " (Belum diisi)"
                                        }, c.companyid, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSubmit,
                    disabled: loading,
                    className: "mt-6 py-2 px-6 rounded-full text-white font-semibold ".concat(loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-800"),
                    children: loading ? "Menyimpan..." : "Simpan & Lanjut"
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormCompany.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
_s(FormCompany, "bXW/sH8jt+7BNoVMLVeAL6uJZwk=");
_c = FormCompany;
var _c;
__turbopack_context__.k.register(_c, "FormCompany");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormCompanyDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormCompanyDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FormCompanyDetails(param) {
    let { onNextStep, onBack } = param;
    var _formData_country;
    _s();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCompanyId, setSelectedCompanyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* Ambil daftar perusahaan */ const fetchCompanies = async ()=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])();
        const sorted = (res.data || []).sort((a, b)=>a.companyid - b.companyid);
        setCompanies(sorted);
        // jika sudah memilih perusahaan, update ulang datanya agar fresh
        if (selectedCompanyId) {
            const updated = sorted.find((c)=>c.companyid === selectedCompanyId);
            if (updated) {
                setFormData(updated);
                setFileName(updated.logo || "");
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormCompanyDetails.useEffect": ()=>{
            fetchCompanies();
        }
    }["FormCompanyDetails.useEffect"], []);
    /*  Ketika user pilih perusahaan */ const handleSelectCompany = (id)=>{
        const company = companies.find((c)=>c.companyid === id);
        if (company) {
            setSelectedCompanyId(company.companyid);
            setFormData(company);
            setFileName(company.logo || "");
            setFile(null);
        } else {
            setSelectedCompanyId(null);
            setFormData({});
            setFile(null);
            setFileName("");
        }
    };
    /*  Handle perubahan input */ const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    /*  Upload file */ const handleFileChange = (e)=>{
        var _e_target_files;
        const f = ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null;
        setFile(f);
        setFileName(f ? f.name : "");
    };
    /* Simpan perubahan */ const handleSave = async ()=>{
        if (!selectedCompanyId) {
            alert("Pilih perusahaan terlebih dahulu!");
            return;
        }
        try {
            setSaving(true);
            const form = new FormData();
            form.append("brandname", formData.brandname || "");
            form.append("entitytype", formData.entitytype || "");
            form.append("noindukberusaha", formData.noindukberusaha || "");
            form.append("npwp", formData.npwp || "");
            form.append("address", formData.address || "");
            form.append("telpno", formData.telpno || "");
            form.append("companyemail", formData.companyemail || "");
            if (file) form.append("logo", file);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyDetails"])(selectedCompanyId, form);
            alert("Data perusahaan berhasil disimpan!");
            await fetchCompanies(); // re-fetch agar data yang baru langsung muncul
        } catch (err) {
            console.error("Error saving:", err);
            alert(err instanceof Error ? err.message : "Terjadi kesalahan saat menyimpan data.");
        } finally{
            setSaving(false);
        }
    };
    const disabled = !selectedCompanyId;
    if (companies.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-6 text-gray-600",
        children: "Memuat data perusahaan..."
    }, void 0, false, {
        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
        lineNumber: 103,
        columnNumber: 12
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 w-full mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4",
                children: "3. Masukkan informasi detail perusahaan"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Nama Legal Perusahaan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCompanyId || "",
                                onChange: (e)=>handleSelectCompany(Number(e.target.value)),
                                className: "col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Pilih Perusahaan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.companyid,
                                            children: c.name
                                        }, c.companyid, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Terdaftar di Negara"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: ((_formData_country = formData.country) === null || _formData_country === void 0 ? void 0 : _formData_country.name) || "",
                                disabled: true,
                                className: "col-span-2 border border-gray-300 rounded-md p-2 bg-gray-200 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Nama Brand/Komersial (jika berbeda)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: formData.brandname || "",
                                onChange: (e)=>handleChange("brandname", e.target.value),
                                disabled: disabled,
                                placeholder: "Nama Brand",
                                className: "col-span-2 border border-gray-300 rounded-md p-2 w-full ".concat(disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400")
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Tipe Entitas Hukum (PT, CV, Yayasan, dll.)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: formData.entitytype || "",
                                onChange: (e)=>handleChange("entitytype", e.target.value),
                                disabled: disabled,
                                placeholder: "PT / CV / dll",
                                className: "col-span-2 border border-gray-300 rounded-md p-2 w-full ".concat(disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400")
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Nomor Induk Berusaha (NIB)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: formData.noindukberusaha || "",
                                onChange: (e)=>handleChange("noindukberusaha", e.target.value),
                                disabled: disabled,
                                placeholder: "Nomor Induk Berusaha",
                                className: "col-span-2 border border-gray-300 rounded-md p-2 w-full ".concat(disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400")
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "NPWP"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: formData.npwp || "",
                                onChange: (e)=>handleChange("npwp", e.target.value),
                                disabled: disabled,
                                placeholder: "NPWP",
                                className: "col-span-2 border border-gray-300 rounded-md p-2 w-full ".concat(disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400")
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Alamat Kantor Pusat"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: formData.address || "",
                                onChange: (e)=>handleChange("address", e.target.value),
                                disabled: disabled,
                                placeholder: "Alamat",
                                className: "col-span-2 border border-gray-300 rounded-md p-2 w-full ".concat(disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400")
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Nomor Telepon & Email Resmi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.telpno || "",
                                        onChange: (e)=>handleChange("telpno", e.target.value),
                                        disabled: disabled,
                                        placeholder: "Telepon",
                                        className: "w-1/2 border border-gray-300 rounded-md p-2 ".concat(disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: formData.companyemail || "",
                                        onChange: (e)=>handleChange("companyemail", e.target.value),
                                        disabled: disabled,
                                        placeholder: "Email",
                                        className: "w-1/2 border border-gray-300 rounded-md p-2 ".concat(disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-medium text-sm",
                                children: "Logo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "relative cursor-pointer ".concat(disabled ? "opacity-60 cursor-not-allowed" : ""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "".concat(disabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700", " text-white px-4 py-2 rounded-md text-sm"),
                                                children: "Upload"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                disabled: disabled,
                                                className: "absolute inset-0 opacity-0 cursor-pointer",
                                                onChange: handleFileChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    fileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-800",
                                        children: fileName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 italic text-sm",
                                        children: "Belum ada logo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: saving || disabled,
                        className: "bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ".concat(saving || disabled ? "opacity-70 cursor-not-allowed" : ""),
                        children: saving ? "Menyimpan..." : "Simpan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormCompanyDetails.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(FormCompanyDetails, "YkDpaluGcy9Ue29e+ep3M3QL4aQ=");
_c = FormCompanyDetails;
var _c;
__turbopack_context__.k.register(_c, "FormCompanyDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/companydesignApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCompanyDesign",
    ()=>getCompanyDesign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id") || "http://localhost:8000";
const getCompanyDesign = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/companydesign"));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormCompanyDesign.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormCompanyDesign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Impor React Flow
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript) <export ReactFlow as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/controls/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/background/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reactflow/core/dist/esm/index.mjs [app-client] (ecmascript)");
// Impor Dagre untuk layout otomatis
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dagre/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companydesignApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companydesignApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// --- Helper Styling React Flow ---
const getNodeStyle = (design)=>{
    const baseStyle = {
        padding: "8px 16px",
        borderWidth: "1px",
        borderRadius: "8px",
        fontSize: "12px",
        textAlign: "center"
    };
    switch(design){
        case "Super Holding":
            return {
                ...baseStyle,
                backgroundColor: "#DBEAFE",
                borderColor: "#93C5FD",
                color: "#1E3A8A"
            };
        case "Holding":
            return {
                ...baseStyle,
                backgroundColor: "#E0F2FE",
                borderColor: "#7DD3FC",
                color: "#075985"
            };
        case "Country Operation":
            return {
                ...baseStyle,
                backgroundColor: "#FEF9C3",
                borderColor: "#FDE047",
                color: "#713F12"
            };
        case "Subsidiary":
            return {
                ...baseStyle,
                backgroundColor: "#DCFCE7",
                borderColor: "#86EFAC",
                color: "#166534"
            };
        case "Stand Alone":
            return {
                ...baseStyle,
                backgroundColor: "#F3F4F6",
                borderColor: "#D1D5DB",
                color: "#374151"
            };
        default:
            return {
                ...baseStyle,
                backgroundColor: "#FFFFFF",
                borderColor: "#D1D5DB"
            };
    }
};
// --- Konstanta untuk Layout Dagre ---
const nodeWidth = 180;
const nodeHeight = 60;
const getLayoutedElements = (nodesToLayout, edgesToLayout)=>{
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphlib.Graph();
    g.setGraph({
        rankdir: 'TB',
        nodesep: 50,
        ranksep: 60
    });
    g.setDefaultEdgeLabel(()=>({}));
    nodesToLayout.forEach((node)=>{
        g.setNode(node.id, {
            width: nodeWidth,
            height: nodeHeight
        });
    });
    edgesToLayout.forEach((edge)=>{
        g.setEdge(edge.source, edge.target);
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout(g);
    const layoutedNodes = nodesToLayout.map((node)=>{
        const { x, y } = g.node(node.id);
        return {
            ...node,
            position: {
                x: x - nodeWidth / 2,
                y: y - nodeHeight / 2
            }
        };
    });
    return {
        nodes: layoutedNodes,
        edges: edgesToLayout
    };
};
// --- Komponen Diagram React Flow ---
function CompanyChart(param) {
    let { companies } = param;
    _s();
    const [nodes, setNodes, onNodesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodesState"])([]);
    const [edges, setEdges, onEdgesChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEdgesState"])([]);
    const nodeTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompanyChart.useMemo[nodeTypes]": ()=>({})
    }["CompanyChart.useMemo[nodeTypes]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanyChart.useEffect": ()=>{
            // 1. Filter perusahaan yang memiliki desain
            const validCompanies = companies.filter({
                "CompanyChart.useEffect.validCompanies": (c)=>c.design !== ""
            }["CompanyChart.useEffect.validCompanies"]);
            // 2. Buat Nodes (TANPA 'position' awal)
            const initialNodes = validCompanies.map({
                "CompanyChart.useEffect.initialNodes": (c)=>({
                        id: c.companyid.toString(),
                        type: "default",
                        data: {
                            label: // Beri style agar lebar node konsisten
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold whitespace-normal",
                                        children: c.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs italic",
                                        children: c.design
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        },
                        position: {
                            x: 0,
                            y: 0
                        },
                        style: getNodeStyle(c.design)
                    })
            }["CompanyChart.useEffect.initialNodes"]);
            // 3. Buat Edges (sama seperti sebelumnya)
            const initialEdges = validCompanies.filter({
                "CompanyChart.useEffect.initialEdges": (c)=>c.reportTo !== ""
            }["CompanyChart.useEffect.initialEdges"]) // Hanya yg "melapor ke"
            .map({
                "CompanyChart.useEffect.initialEdges": (c)=>{
                    // Cari parent
                    const parent = companies.find({
                        "CompanyChart.useEffect.initialEdges.parent": (p)=>p.name === c.reportTo
                    }["CompanyChart.useEffect.initialEdges.parent"]);
                    if (!parent) return null; // Jika parent tidak ditemukan
                    return {
                        id: "e-".concat(parent.companyid, "-").concat(c.companyid),
                        source: parent.companyid.toString(),
                        target: c.companyid.toString(),
                        type: "smoothstep",
                        markerEnd: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed,
                            color: "#6b7280"
                        },
                        style: {
                            stroke: "#6b7280"
                        }
                    };
                }
            }["CompanyChart.useEffect.initialEdges"]).filter({
                "CompanyChart.useEffect.initialEdges": (e)=>e !== null
            }["CompanyChart.useEffect.initialEdges"]); // Hapus yg null
            // 4. Hitung Layout menggunakan Dagre
            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
        }
    }["CompanyChart.useEffect"], [
        companies,
        setNodes,
        setEdges
    ]); // Dijalankan ulang saat `companies` berubah
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactFlow__as__default$3e$__["default"], {
        nodes: nodes,
        edges: edges,
        onNodesChange: onNodesChange,
        onEdgesChange: onEdgesChange,
        nodeTypes: nodeTypes,
        fitView: true,
        nodesDraggable: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$controls$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {}, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$background$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Background"], {}, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(CompanyChart, "zY/qQYaws3ZC4E1mdwOIWX/3nsY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNodesState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reactflow$2f$core$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEdgesState"]
    ];
});
_c = CompanyChart;
function FormCompanyDesign(param) {
    let { onNextStep, onBack } = param;
    _s1();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [companyDesign, setCompanyDesign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ambil data perusahaan & desain dari API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormCompanyDesign.useEffect": ()=>{
            const fetchData = {
                "FormCompanyDesign.useEffect.fetchData": async ()=>{
                    try {
                        const [resCompanies, resDesigns] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companydesignApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyDesign"])()
                        ]);
                        const apiCompanies = resCompanies.data.map({
                            "FormCompanyDesign.useEffect.fetchData.apiCompanies": (c)=>{
                                var _c_companydesign, _c_reporttocompany;
                                return {
                                    ...c,
                                    design: ((_c_companydesign = c.companydesign) === null || _c_companydesign === void 0 ? void 0 : _c_companydesign.name) || "",
                                    reportTo: ((_c_reporttocompany = c.reporttocompany) === null || _c_reporttocompany === void 0 ? void 0 : _c_reporttocompany.name) || ""
                                };
                            }
                        }["FormCompanyDesign.useEffect.fetchData.apiCompanies"]);
                        setCompanies(apiCompanies);
                        setCompanyDesign(resDesigns.data);
                    } catch (err) {
                        console.error("Gagal memuat data:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FormCompanyDesign.useEffect.fetchData"];
            fetchData();
        }
    }["FormCompanyDesign.useEffect"], []);
    // Handle perubahan dropdown
    const handleChange = (index, field, value)=>{
        const updated = [
            ...companies
        ];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        // Jika ubah design, reset reportTo
        if (field === "design") {
            updated[index].reportTo = "";
        }
        setCompanies(updated);
    };
    // Tentukan opsi "melapor ke" berdasarkan desain
    const getReportToOptions = (currentDesign)=>{
        switch(currentDesign){
            case "Super Holding":
            case "Stand Alone":
                return [];
            case "Holding":
                return companies.filter((c)=>c.design === "Super Holding");
            case "Country Operation":
                return companies.filter((c)=>c.design === "Super Holding" || c.design === "Holding");
            case "Subsidiary":
                return companies.filter((c)=>c.design === "Super Holding" || c.design === "Holding" || c.design === "Country Operation");
            default:
                return [];
        }
    };
    // Simpan ke backend
    const handleSave = async ()=>{
        try {
            setSaving(true);
            const payload = companies.filter((c)=>c.design !== "").map((c)=>{
                const selectedDesign = companyDesign.find((d)=>d.name === c.design);
                const reportToCompany = companies.find((r)=>r.name === c.reportTo);
                var _selectedDesign_companydesignid, _reportToCompany_companyid;
                return {
                    companyid: c.companyid,
                    companydesignid: (_selectedDesign_companydesignid = selectedDesign === null || selectedDesign === void 0 ? void 0 : selectedDesign.companydesignid) !== null && _selectedDesign_companydesignid !== void 0 ? _selectedDesign_companydesignid : null,
                    reporttocompanyid: (_reportToCompany_companyid = reportToCompany === null || reportToCompany === void 0 ? void 0 : reportToCompany.companyid) !== null && _reportToCompany_companyid !== void 0 ? _reportToCompany_companyid : null
                };
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyDesign"])(payload);
            // Menggunakan alert bawaan seperti kode asli
            alert("Desain perusahaan berhasil disimpan!");
            onNextStep();
        } catch (err) {
            console.error("Gagal menyimpan desain perusahaan:", err);
            alert("Terjadi kesalahan saat menyimpan data.");
        } finally{
            setSaving(false);
        }
    };
    // Memoize nilai-nilai ini agar tidak dihitung ulang pada setiap render
    const { hasAnyDesign, hasRoot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormCompanyDesign.useMemo": ()=>{
            const anyDesign = companies.some({
                "FormCompanyDesign.useMemo.anyDesign": (c)=>c.design !== ""
            }["FormCompanyDesign.useMemo.anyDesign"]);
            const root = companies.some({
                "FormCompanyDesign.useMemo.root": (c)=>c.design === "Super Holding" || c.design === "Stand Alone"
            }["FormCompanyDesign.useMemo.root"]);
            return {
                hasAnyDesign: anyDesign,
                hasRoot: root
            };
        }
    }["FormCompanyDesign.useMemo"], [
        companies
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "p-6 text-gray-600",
        children: "Memuat data..."
    }, void 0, false, {
        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
        lineNumber: 327,
        columnNumber: 23
    }, this);
    // --- Render utama (Form + Diagram) ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 w-full mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4",
                children: "5. Masukan informasi group perusahaan"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 font-semibold text-sm bg-gray-100 border border-gray-300 rounded-t-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-r border-gray-300",
                        children: "Nama Perusahaan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-r border-gray-300",
                        children: "Negara"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-r border-gray-300",
                        children: "Desain Perusahaan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2",
                        children: "Melapor Ke"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this),
            companies.map((company, index)=>{
                var _company_country;
                const reportOptions = getReportToOptions(company.design);
                const isReportToDisabled = company.design === "Super Holding" || company.design === "Stand Alone" || reportOptions.length === 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 border-x border-b border-gray-300 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-r border-gray-300",
                            children: company.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-r border-gray-300",
                            children: ((_company_country = company.country) === null || _company_country === void 0 ? void 0 : _company_country.name) || ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 border-r border-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: company.design,
                                onChange: (e)=>handleChange(index, "design", e.target.value),
                                className: "w-full border border-gray-300 rounded-md p-1 bg-blue-50 focus:ring-2 focus:ring-blue-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Pilih"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                        lineNumber: 370,
                                        columnNumber: 17
                                    }, this),
                                    companyDesign.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: opt.name,
                                            children: opt.name
                                        }, opt.companydesignid, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                            lineNumber: 372,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                lineNumber: 363,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: company.reportTo,
                                onChange: (e)=>handleChange(index, "reportTo", e.target.value),
                                disabled: isReportToDisabled,
                                className: "w-full border border-gray-300 rounded-md p-1 ".concat(isReportToDisabled ? "bg-gray-100 text-gray-400" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this),
                                    reportOptions.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.name,
                                            children: c.name
                                        }, c.name, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                lineNumber: 380,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 w-full p-6 bg-gray-50 rounded-lg border overflow-hidden",
                style: {
                    height: "500px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-md font-semibold mb-4 text-center",
                        children: "Bagan Struktur Organisasi (Live Preview)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    !hasAnyDesign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex flex-col justify-center items-center text-center text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Bagan struktur akan muncul di sini."
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: 'Mulai dengan memilih "Super Holding" atau "Stand Alone" pada tabel di atas.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 414,
                        columnNumber: 11
                    }, this),
                    hasAnyDesign && !hasRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex flex-col justify-center items-center text-center text-red-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                children: "Struktur Tidak Valid"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: 'Tidak ditemukan "Super Holding" atau "Stand Alone" sebagai akar struktur.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this),
                    hasAnyDesign && hasRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompanyChart, {
                        companies: companies
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 434,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 justify-end mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition",
                        disabled: saving,
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: saving,
                        className: "".concat(saving ? "bg-gray-400" : "bg-green-500 hover:bg-green-700", " text-sm text-white font-semibold py-2 px-6 rounded-full transition"),
                        children: saving ? "Menyimpan..." : "Simpan & Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormCompanyDesign.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
_s1(FormCompanyDesign, "O2a/9WVJ0BAlRWxgbxzo78X82JI=");
_c1 = FormCompanyDesign;
var _c, _c1;
__turbopack_context__.k.register(_c, "CompanyChart");
__turbopack_context__.k.register(_c1, "FormCompanyDesign");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/companybaseorgstrucApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseOrgStructure",
    ()=>getBaseOrgStructure,
    "getCompanyBaseOrgStruc",
    ()=>getCompanyBaseOrgStruc,
    "saveCompanyBaseOrgStruc",
    ()=>saveCompanyBaseOrgStruc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id");
const getBaseOrgStructure = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/baseorgstructure"));
    return response.data;
};
const getCompanyBaseOrgStruc = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/companybaseorgstruc"));
    return response.data;
};
const saveCompanyBaseOrgStruc = async (companybaseorgstruc)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/companybaseorgstruc"), companybaseorgstruc, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormCompanyBaseOrgStruc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companybaseorgstrucApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companybaseorgstrucApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FormCompanyBaseOrgStruc(param) {
    let { onNextStep, onBack } = param;
    _s();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [baseOrgStructure, setBaseOrgStructure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [companyBaseOrgStruc, setCompanyBaseOrgStruc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCompany, setSelectedCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- FETCH DATA ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormCompanyBaseOrgStruc.useEffect": ()=>{
            const fetchData = {
                "FormCompanyBaseOrgStruc.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const [resCompanies, resBase, resCompanyBase] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companybaseorgstrucApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseOrgStructure"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companybaseorgstrucApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyBaseOrgStruc"])()
                        ]);
                        setCompanies((resCompanies.data || []).sort({
                            "FormCompanyBaseOrgStruc.useEffect.fetchData": (a, b)=>a.companyid - b.companyid
                        }["FormCompanyBaseOrgStruc.useEffect.fetchData"]));
                        setBaseOrgStructure((resBase.data || []).sort({
                            "FormCompanyBaseOrgStruc.useEffect.fetchData": (a, b)=>a.ordeno - b.ordeno
                        }["FormCompanyBaseOrgStruc.useEffect.fetchData"]));
                        setCompanyBaseOrgStruc(resCompanyBase.data || []);
                    } catch (err) {
                        console.error("Gagal memuat data:", err);
                        setError("Gagal memuat data perusahaan atau struktur organisasi");
                    } finally{
                        setLoading(false);
                    }
                }
            }["FormCompanyBaseOrgStruc.useEffect.fetchData"];
            fetchData();
        }
    }["FormCompanyBaseOrgStruc.useEffect"], []);
    const selectedCompanyData = companies.find((c)=>c.name === selectedCompany);
    // --- HANDLE CHECKBOX ---
    const handleCheckboxChange = (baseOrgId, isChecked)=>{
        if (!selectedCompanyData) return;
        const companyId = selectedCompanyData.companyid;
        const existingIndex = companyBaseOrgStruc.findIndex((cbos)=>cbos.companyid === companyId && cbos.baseorgstructureid === baseOrgId);
        if (existingIndex > -1) {
            // sudah ada di backend → update selected saja
            const updatedList = [
                ...companyBaseOrgStruc
            ];
            updatedList[existingIndex] = {
                ...updatedList[existingIndex],
                selected: isChecked
            };
            setCompanyBaseOrgStruc(updatedList);
        } else {
            // belum ada di backend → buat data baru tanpa id
            const newRelation = {
                id: 0,
                companyid: companyId,
                baseorgstructureid: baseOrgId,
                selected: isChecked
            };
            setCompanyBaseOrgStruc((prev)=>[
                    ...prev,
                    newRelation
                ]);
        }
    };
    // --- HANDLE SAVE ---
    const handleSave = async ()=>{
        if (!selectedCompanyData) return;
        setSaving(true);
        setError(null);
        const companyId = selectedCompanyData.companyid;
        const dataToSave = baseOrgStructure.map((base)=>{
            const existing = companyBaseOrgStruc.find((cbos)=>cbos.companyid === companyId && cbos.baseorgstructureid === base.baseorgstructureid);
            if (existing) {
                // sudah ada data di backend → kirim dengan id
                return {
                    id: existing.id !== 0 ? existing.id : undefined,
                    companyid: companyId,
                    baseorgstructureid: base.baseorgstructureid,
                    selected: existing.selected
                };
            } else {
                // belum ada data di backend
                return {
                    companyid: companyId,
                    baseorgstructureid: base.baseorgstructureid,
                    selected: false
                };
            }
        });
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companybaseorgstrucApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyBaseOrgStruc"])(dataToSave);
            alert("Data berhasil disimpan!");
            const refreshed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companybaseorgstrucApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyBaseOrgStruc"])();
            setCompanyBaseOrgStruc(refreshed.data || []);
        } catch (err) {
            console.error("Gagal menyimpan:", err);
            setError("Gagal menyimpan data. Silakan coba lagi.");
        } finally{
            setSaving(false);
        }
    };
    const disabled = !selectedCompany;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-4",
                children: "6. Selanjutnya, buatlah struktur organisasi dasar"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 px-5",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Memuat data..."
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                    lineNumber: 133,
                    columnNumber: 21
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                    lineNumber: 135,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500",
                    value: selectedCompany,
                    onChange: (e)=>setSelectedCompany(e.target.value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Pilih Perusahaan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                            lineNumber: 142,
                            columnNumber: 25
                        }, this),
                        companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c.name,
                                children: c.name
                            }, c.companyid, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                                lineNumber: 144,
                                columnNumber: 29
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                    lineNumber: 137,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            !loading && !error && selectedCompanyData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-6 px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold mb-4 text-center text-lg",
                            children: selectedCompanyData.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                            lineNumber: 155,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "w-full max-w-xl space-y-2",
                                children: baseOrgStructure.map((item, idx)=>{
                                    const relation = companyBaseOrgStruc.find((cbos)=>cbos.companyid === selectedCompanyData.companyid && cbos.baseorgstructureid === item.baseorgstructureid);
                                    const isChecked = relation ? relation.selected : false;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between px-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500 w-6 text-right",
                                                        children: [
                                                            idx + 1,
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-800",
                                                        children: item.nama
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                                                lineNumber: 175,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: isChecked,
                                                onChange: (e)=>handleCheckboxChange(item.baseorgstructureid, e.target.checked),
                                                className: "h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                                                lineNumber: 182,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, item.baseorgstructureid, true, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                                        lineNumber: 171,
                                        columnNumber: 41
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                                lineNumber: 160,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                            lineNumber: 159,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                lineNumber: 153,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-500 font-semibold mt-6",
                children: "CHECKLIST INI AKAN BERPENGARUH KE SUB-MODUL JOB REPOSITORY"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: saving || disabled,
                        className: "bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ".concat(saving || disabled ? "opacity-70 cursor-not-allowed" : ""),
                        children: saving ? "Menyimpan..." : "Simpan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx",
        lineNumber: 126,
        columnNumber: 9
    }, this);
}
_s(FormCompanyBaseOrgStruc, "GPwkg60TFEygwzhOIdCsoaOAreI=");
_c = FormCompanyBaseOrgStruc;
var _c;
__turbopack_context__.k.register(_c, "FormCompanyBaseOrgStruc");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/companyhrruleApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCompanyHRRule",
    ()=>getCompanyHRRule,
    "getHRBaseRule",
    ()=>getHRBaseRule,
    "saveCompanyHRRule",
    ()=>saveCompanyHRRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id");
const getHRBaseRule = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/hrbaserule"));
    return response.data;
};
const getCompanyHRRule = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/companyhrrule"));
    return response.data;
};
const saveCompanyHRRule = async (companyhrrule)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/companyhrrule"), companyhrrule, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormHRRule.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormHRRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyhrruleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyhrruleApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FormHRRule(param) {
    let { onNextStep, onBack } = param;
    _s();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [baseRules, setBaseRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groupedRules, setGroupedRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedCompany, setSelectedCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [tempNewRule, setTempNewRule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [companyRules, setCompanyRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [baseGroupedRules, setBaseGroupedRules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [disabled, setDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormHRRule.useEffect": ()=>{
            const fetchData = {
                "FormHRRule.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const [resCompanies, resHRBaseRule] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyhrruleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHRBaseRule"])()
                        ]);
                        // Urutkan perusahaan
                        setCompanies((resCompanies.data || []).sort({
                            "FormHRRule.useEffect.fetchData": (a, b)=>a.companyid - b.companyid
                        }["FormHRRule.useEffect.fetchData"]));
                        // Kelompokkan HR Base Rule berdasarkan group rule
                        const data = resHRBaseRule.data || [];
                        setBaseRules(data);
                        const grouped = data.reduce({
                            "FormHRRule.useEffect.fetchData.grouped": (acc, item)=>{
                                if (!acc[item.grouprule]) acc[item.grouprule] = [];
                                acc[item.grouprule].push(item.rulename);
                                return acc;
                            }
                        }["FormHRRule.useEffect.fetchData.grouped"], {});
                        setBaseGroupedRules(grouped);
                        setGroupedRules(grouped);
                    } catch (err) {
                        console.error("Gagal memuat data:", err);
                        setError("Gagal memuat data perusahaan atau aturan dasar HR");
                    } finally{
                        setLoading(false);
                    }
                }
            }["FormHRRule.useEffect.fetchData"];
            fetchData();
        }
    }["FormHRRule.useEffect"], []);
    //  Ambil data companyhrrule saat perusahaan dipilih
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormHRRule.useEffect": ()=>{
            const fetchCompanyRules = {
                "FormHRRule.useEffect.fetchCompanyRules": async ()=>{
                    if (!selectedCompany || companies.length === 0) return;
                    try {
                        setLoading(true);
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyhrruleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyHRRule"])();
                        const selectedCompanyData = companies.find({
                            "FormHRRule.useEffect.fetchCompanyRules.selectedCompanyData": (c)=>c.name === selectedCompany
                        }["FormHRRule.useEffect.fetchCompanyRules.selectedCompanyData"]);
                        if (!selectedCompanyData) return;
                        const rules = (res.data || []).filter({
                            "FormHRRule.useEffect.fetchCompanyRules.rules": (r)=>r.companyid === selectedCompanyData.companyid
                        }["FormHRRule.useEffect.fetchCompanyRules.rules"]);
                        setCompanyRules(rules);
                        const newGrouped = JSON.parse(JSON.stringify(baseGroupedRules));
                        rules.forEach({
                            "FormHRRule.useEffect.fetchCompanyRules": (r)=>{
                                if (r.hrbaseruleid === 0) {
                                    if (!newGrouped[r.grouprule]) newGrouped[r.grouprule] = [];
                                    // hindari duplikasi nama rule
                                    if (!newGrouped[r.grouprule].includes(r.rulename)) {
                                        newGrouped[r.grouprule].push(r.rulename);
                                    }
                                }
                            }
                        }["FormHRRule.useEffect.fetchCompanyRules"]);
                        setGroupedRules(newGrouped);
                    } catch (err) {
                        console.error("Gagal memuat aturan perusahaan:", err);
                        setError("Gagal memuat aturan HR untuk perusahaan ini");
                    } finally{
                        setLoading(false);
                    }
                }
            }["FormHRRule.useEffect.fetchCompanyRules"];
            fetchCompanyRules();
        }
    }["FormHRRule.useEffect"], [
        selectedCompany,
        companies,
        baseGroupedRules
    ]);
    //  Tambah rule baru
    const commitNewRule = (group)=>{
        var _tempNewRule_group;
        const newRuleName = (_tempNewRule_group = tempNewRule[group]) === null || _tempNewRule_group === void 0 ? void 0 : _tempNewRule_group.trim();
        if (newRuleName) {
            var _groupedRules_group;
            // Cek apakah rule sudah ada di daftar
            const existingInList = (_groupedRules_group = groupedRules[group]) === null || _groupedRules_group === void 0 ? void 0 : _groupedRules_group.includes(newRuleName);
            if (!existingInList) {
                // 1. Tambahkan ke state 'groupedRules' agar muncul di UI
                setGroupedRules((prev)=>({
                        ...prev,
                        [group]: [
                            ...prev[group] || [],
                            newRuleName
                        ]
                    }));
                // 2. Tambahkan ke state 'companyRules' sebagai rule baru (custom)
                //    dan default-nya 'selected: false'
                if (!companyRules.find((r)=>r.rulename === newRuleName && r.grouprule === group)) {
                    setCompanyRules((prevRules)=>{
                        var _companies_find;
                        return [
                            ...prevRules,
                            {
                                companyid: ((_companies_find = companies.find((c)=>c.name === selectedCompany)) === null || _companies_find === void 0 ? void 0 : _companies_find.companyid) || 0,
                                hrbaseruleid: 0,
                                grouprule: group,
                                rulename: newRuleName,
                                selected: false
                            }
                        ];
                    });
                }
            }
        }
        // 3. Sembunyikan input dan reset nilainya
        setIsAdding((prev)=>({
                ...prev,
                [group]: false
            }));
        setTempNewRule((prev)=>({
                ...prev,
                [group]: ""
            }));
    };
    //  Cek apakah checkbox aktif (selected)
    const isRuleSelected = (ruleName, group)=>{
        const rule = companyRules.find((r)=>r.rulename === ruleName && r.grouprule === group);
        return rule ? rule.selected === true : false;
    };
    const handleSave = async ()=>{
        if (!selectedCompany) {
            alert("Pilih perusahaan terlebih dahulu!");
            return;
        }
        const selectedCompanyData = companies.find((c)=>c.name === selectedCompany);
        if (!selectedCompanyData) return;
        const companyId = selectedCompanyData.companyid;
        setSaving(true);
        setDisabled(true);
        try {
            // Bentuk array untuk dikirim ke backend
            const payload = [];
            Object.entries(groupedRules).forEach((param)=>{
                let [group, ruleNames] = param;
                ruleNames.forEach((ruleName)=>{
                    // 'existing' -> data dari CompanyHRRule (jika sudah pernah disimpan)
                    const existing = companyRules.find((r)=>r.rulename === ruleName && r.grouprule === group);
                    // 'base' -> data dari HRBaseRule (master data)
                    const base = baseRules.find((r)=>r.rulename === ruleName && r.grouprule === group);
                    const isChecked = existing ? existing.selected : false;
                    var _existing_hrbaseruleid, _ref;
                    const hrBaseRuleIdToSave = (_ref = (_existing_hrbaseruleid = existing === null || existing === void 0 ? void 0 : existing.hrbaseruleid) !== null && _existing_hrbaseruleid !== void 0 ? _existing_hrbaseruleid : base === null || base === void 0 ? void 0 : base.hrbaseruleid) !== null && _ref !== void 0 ? _ref : 0;
                    var _existing_companyhrruleid;
                    const companyHrRuleId = (_existing_companyhrruleid = existing === null || existing === void 0 ? void 0 : existing.companyhrruleid) !== null && _existing_companyhrruleid !== void 0 ? _existing_companyhrruleid : undefined;
                    payload.push({
                        companyhrruleid: companyHrRuleId,
                        companyid: companyId,
                        hrbaseruleid: hrBaseRuleIdToSave,
                        grouprule: group,
                        rulename: ruleName,
                        selected: isChecked
                    });
                });
            });
            // Kirim ke backend
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyhrruleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyHRRule"])(payload);
            console.log("Data tersimpan:", res);
            alert("Aturan HR berhasil disimpan!");
            // Refresh ulang data perusahaan biar sinkron
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyhrruleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyHRRule"])();
            const rules = updated.data.filter((r)=>r.companyid === selectedCompanyData.companyid);
            setCompanyRules(rules);
        } catch (err) {
            console.error("Gagal menyimpan aturan:", err);
            alert("Gagal menyimpan aturan HR!");
        } finally{
            setSaving(false);
            setDisabled(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-4",
                children: "7. Aturan Dasar HR"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                lineNumber: 219,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 px-5",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Memuat data..."
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                    lineNumber: 224,
                    columnNumber: 21
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                    lineNumber: 226,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500",
                    value: selectedCompany,
                    onChange: (e)=>setSelectedCompany(e.target.value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Pilih Perusahaan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                            lineNumber: 233,
                            columnNumber: 25
                        }, this),
                        companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c.name,
                                children: c.name
                            }, c.companyid, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                lineNumber: 235,
                                columnNumber: 29
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                    lineNumber: 228,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                lineNumber: 222,
                columnNumber: 13
            }, this),
            !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm",
                children: Object.entries(groupedRules).map((param)=>{
                    let [group, ruleNames] = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col border border-gray-300 rounded-md overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-900 text-white text-center font-semibold py-1",
                                children: group
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                lineNumber: 251,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 space-y-1 flex-1",
                                children: [
                                    ruleNames.map((rule, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: rule
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    "data-rule": "".concat(rule, "-").concat(group),
                                                    className: "h-4 w-4 text-blue-600 border-gray-300 rounded",
                                                    checked: isRuleSelected(rule, group),
                                                    onChange: (e)=>{
                                                        const updated = [
                                                            ...companyRules
                                                        ];
                                                        const existing = updated.find((r)=>r.rulename === rule && r.grouprule === group);
                                                        if (existing) {
                                                            // Jika sudah ada, update status 'selected'
                                                            existing.selected = e.target.checked;
                                                        } else {
                                                            var _companies_find;
                                                            // Jika belum ada, buat entri baru
                                                            // Cari di master 'baseRules' untuk dapat ID aslinya
                                                            const base = baseRules.find((r)=>r.rulename === rule && r.grouprule === group);
                                                            updated.push({
                                                                companyid: ((_companies_find = companies.find((c)=>c.name === selectedCompany)) === null || _companies_find === void 0 ? void 0 : _companies_find.companyid) || 0,
                                                                // Jika ada di 'base', pakai ID-nya. Jika tidak (rule kustom), pakai 0
                                                                hrbaseruleid: base ? base.hrbaseruleid : 0,
                                                                grouprule: group,
                                                                rulename: rule,
                                                                selected: e.target.checked
                                                            });
                                                        }
                                                        setCompanyRules(updated);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                            lineNumber: 257,
                                            columnNumber: 37
                                        }, this)),
                                    isAdding[group] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 pt-2 border-t border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: tempNewRule[group] || "",
                                            onChange: (e)=>setTempNewRule((prev)=>({
                                                        ...prev,
                                                        [group]: e.target.value
                                                    })),
                                            // autoFocus agar kursor langsung aktif
                                            autoFocus: true,
                                            // 'onBlur' akan commit perubahan jika input tidak kosong
                                            onBlur: ()=>commitNewRule(group),
                                            // 'onKeyDown' untuk commit jika menekan Enter
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter') {
                                                    commitNewRule(group);
                                                }
                                            },
                                            className: "border border-gray-300 rounded-md px-2 py-1 w-full text-sm focus:ring-blue-500 focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                            lineNumber: 295,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                        lineNumber: 294,
                                        columnNumber: 37
                                    }, this),
                                    !isAdding[group] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 border-t border-gray-200 pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsAdding((prev)=>({
                                                        ...prev,
                                                        [group]: true
                                                    })),
                                            className: "w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm py-1 transition",
                                            disabled: !selectedCompany,
                                            children: "+ Tambah"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                            lineNumber: 322,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                        lineNumber: 321,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                                lineNumber: 255,
                                columnNumber: 29
                            }, this)
                        ]
                    }, group, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                        lineNumber: 247,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                lineNumber: 245,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                        lineNumber: 340,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: saving || disabled || !selectedCompany,
                        className: "bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ".concat(saving || disabled ? "opacity-70 cursor-not-allowed" : ""),
                        children: saving ? "Menyimpan..." : "Simpan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                        lineNumber: 346,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
                lineNumber: 339,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormHRRule.tsx",
        lineNumber: 217,
        columnNumber: 9
    }, this);
}
_s(FormHRRule, "e1FV2dzNucenXy7zwxmKjVzjSjo=");
_c = FormHRRule;
var _c;
__turbopack_context__.k.register(_c, "FormHRRule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/cutiizinApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCompanyCuti",
    ()=>getCompanyCuti,
    "getCompanyIzin",
    ()=>getCompanyIzin,
    "getDaftarCuti",
    ()=>getDaftarCuti,
    "getDaftarIzin",
    ()=>getDaftarIzin,
    "saveCompanyCuti",
    ()=>saveCompanyCuti,
    "saveCompanyIzin",
    ()=>saveCompanyIzin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id") || "http://localhost:8000";
const getDaftarCuti = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/daftarcuti"));
    return response.data;
};
const getDaftarIzin = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/daftarizin"));
    return response.data;
};
const getCompanyCuti = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/companycuti"));
    return response.data;
};
const getCompanyIzin = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/companyizin"));
    return response.data;
};
const saveCompanyCuti = async (companycuti)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/companycuti"), companycuti, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const saveCompanyIzin = async (companyizin)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/companyizin"), companyizin, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormCutiIzin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormCutiIzin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$cutiizinApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/cutiizinApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FormCutiIzin(param) {
    let { onNextStep, onBack } = param;
    _s();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCompany, setSelectedCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [daftarCuti, setDaftarCuti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [daftarIzin, setDaftarIzin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [companyCuti, setCompanyCuti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [companyIzin, setCompanyIzin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //  Ambil master data & perusahaan
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormCutiIzin.useEffect": ()=>{
            const fetchData = {
                "FormCutiIzin.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const [resCompanies, resCuti, resIzin] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$cutiizinApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaftarCuti"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$cutiizinApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaftarIzin"])()
                        ]);
                        setCompanies((resCompanies.data || []).sort({
                            "FormCutiIzin.useEffect.fetchData": (a, b)=>a.companyid - b.companyid
                        }["FormCutiIzin.useEffect.fetchData"]));
                        setDaftarCuti(resCuti.data || []);
                        setDaftarIzin(resIzin.data || []);
                    } catch (err) {
                        console.error("Gagal memuat data master:", err);
                        setError("Gagal memuat data perusahaan atau daftar cuti/izin");
                    } finally{
                        setLoading(false);
                    }
                }
            }["FormCutiIzin.useEffect.fetchData"];
            fetchData();
        }
    }["FormCutiIzin.useEffect"], []);
    //  Ambil data companycuti dan companyizin ketika perusahaan dipilih
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormCutiIzin.useEffect": ()=>{
            if (!selectedCompany) return;
            const fetchCompanyData = {
                "FormCutiIzin.useEffect.fetchCompanyData": async ()=>{
                    try {
                        setLoading(true);
                        const selected = companies.find({
                            "FormCutiIzin.useEffect.fetchCompanyData.selected": (c)=>c.name === selectedCompany
                        }["FormCutiIzin.useEffect.fetchCompanyData.selected"]);
                        if (!selected) return;
                        const [resCompCuti, resCompIzin] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$cutiizinApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyCuti"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$cutiizinApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyIzin"])()
                        ]);
                        const allCompanyCuti = resCompCuti.data || [];
                        const allCompanyIzin = resCompIzin.data || [];
                        const filteredCuti = allCompanyCuti.filter({
                            "FormCutiIzin.useEffect.fetchCompanyData.filteredCuti": (x)=>x.companyid === selected.companyid
                        }["FormCutiIzin.useEffect.fetchCompanyData.filteredCuti"]);
                        const filteredIzin = allCompanyIzin.filter({
                            "FormCutiIzin.useEffect.fetchCompanyData.filteredIzin": (x)=>x.companyid === selected.companyid
                        }["FormCutiIzin.useEffect.fetchCompanyData.filteredIzin"]);
                        //  Merge daftar cuti master + data company
                        const mergedCuti = daftarCuti.map({
                            "FormCutiIzin.useEffect.fetchCompanyData.mergedCuti": (master)=>{
                                const existing = filteredCuti.find({
                                    "FormCutiIzin.useEffect.fetchCompanyData.mergedCuti.existing": (c)=>c.daftarcutiid === master.daftarcutiid
                                }["FormCutiIzin.useEffect.fetchCompanyData.mergedCuti.existing"]);
                                var _existing_companycutiid, _existing_jumlahhari;
                                return {
                                    companycutiid: (_existing_companycutiid = existing === null || existing === void 0 ? void 0 : existing.companycutiid) !== null && _existing_companycutiid !== void 0 ? _existing_companycutiid : 0,
                                    companyid: selected.companyid,
                                    daftarcutiid: master.daftarcutiid,
                                    deskripsi: master.deskripsi,
                                    jumlahhari: (_existing_jumlahhari = existing === null || existing === void 0 ? void 0 : existing.jumlahhari) !== null && _existing_jumlahhari !== void 0 ? _existing_jumlahhari : 0
                                };
                            }
                        }["FormCutiIzin.useEffect.fetchCompanyData.mergedCuti"]);
                        // tambahkan data baru (daftarcutiid = 0)
                        const newCuti = filteredCuti.filter({
                            "FormCutiIzin.useEffect.fetchCompanyData.newCuti": (c)=>c.daftarcutiid === 0
                        }["FormCutiIzin.useEffect.fetchCompanyData.newCuti"]);
                        const finalCuti = [
                            ...mergedCuti,
                            ...newCuti
                        ];
                        //  Merge daftar izin master + data company
                        const mergedIzin = daftarIzin.map({
                            "FormCutiIzin.useEffect.fetchCompanyData.mergedIzin": (master)=>{
                                const existing = filteredIzin.find({
                                    "FormCutiIzin.useEffect.fetchCompanyData.mergedIzin.existing": (i)=>i.daftarizinid === master.daftarizinid
                                }["FormCutiIzin.useEffect.fetchCompanyData.mergedIzin.existing"]);
                                var _existing_companyizinid, _existing_jumlahhari;
                                return {
                                    companyizinid: (_existing_companyizinid = existing === null || existing === void 0 ? void 0 : existing.companyizinid) !== null && _existing_companyizinid !== void 0 ? _existing_companyizinid : 0,
                                    companyid: selected.companyid,
                                    daftarizinid: master.daftarizinid,
                                    deskripsi: master.deskripsi,
                                    jumlahhari: (_existing_jumlahhari = existing === null || existing === void 0 ? void 0 : existing.jumlahhari) !== null && _existing_jumlahhari !== void 0 ? _existing_jumlahhari : 0
                                };
                            }
                        }["FormCutiIzin.useEffect.fetchCompanyData.mergedIzin"]);
                        // tambahkan data baru (daftarizinid = 0)
                        const newIzin = filteredIzin.filter({
                            "FormCutiIzin.useEffect.fetchCompanyData.newIzin": (i)=>i.daftarizinid === 0
                        }["FormCutiIzin.useEffect.fetchCompanyData.newIzin"]);
                        const finalIzin = [
                            ...mergedIzin,
                            ...newIzin
                        ];
                        setCompanyCuti(finalCuti);
                        setCompanyIzin(finalIzin);
                    } catch (err) {
                        console.error("Gagal memuat company cuti/izin:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FormCutiIzin.useEffect.fetchCompanyData"];
            fetchCompanyData();
        }
    }["FormCutiIzin.useEffect"], [
        selectedCompany,
        daftarCuti,
        daftarIzin,
        companies
    ]);
    //  Checkbox toggle logic
    const handleCheckboxChange = (type, index)=>{
        if (type === "cuti") {
            setCompanyCuti((prev)=>prev.map((item, idx)=>idx === index ? {
                        ...item,
                        jumlahhari: item.jumlahhari > 0 ? 0 : 1
                    } : item));
        } else {
            setCompanyIzin((prev)=>prev.map((item, idx)=>idx === index ? {
                        ...item,
                        jumlahhari: item.jumlahhari > 0 ? 0 : 1
                    } : item));
        }
    };
    //  Input jumlah hari
    const handleJumlahHariChange = (type, index, value)=>{
        if (type === "cuti") {
            setCompanyCuti((prev)=>prev.map((item, idx)=>idx === index ? {
                        ...item,
                        jumlahhari: value
                    } : item));
        } else {
            setCompanyIzin((prev)=>prev.map((item, idx)=>idx === index ? {
                        ...item,
                        jumlahhari: value
                    } : item));
        }
    };
    //  Edit deskripsi
    const handleDeskripsiChange = (type, index, value)=>{
        if (type === "cuti") {
            setCompanyCuti((prev)=>prev.map((item, idx)=>idx === index ? {
                        ...item,
                        deskripsi: value
                    } : item));
        } else {
            setCompanyIzin((prev)=>prev.map((item, idx)=>idx === index ? {
                        ...item,
                        deskripsi: value
                    } : item));
        }
    };
    //  Tambah baris baru
    const handleAddRow = (type)=>{
        const selected = companies.find((c)=>c.name === selectedCompany);
        if (!selected) return;
        if (type === "cuti") {
            setCompanyCuti((prev)=>[
                    ...prev,
                    {
                        companycutiid: 0,
                        companyid: selected.companyid,
                        daftarcutiid: 0,
                        deskripsi: "",
                        jumlahhari: 0
                    }
                ]);
        } else {
            setCompanyIzin((prev)=>[
                    ...prev,
                    {
                        companyizinid: 0,
                        companyid: selected.companyid,
                        daftarizinid: 0,
                        deskripsi: "",
                        jumlahhari: 0
                    }
                ]);
        }
    };
    //  Simpan data (array)
    const handleSave = async ()=>{
        const selected = companies.find((c)=>c.name === selectedCompany);
        if (!selected) return;
        try {
            setSaving(true);
            // filter hanya data valid (ada deskripsi)
            const validCuti = companyCuti.filter((c)=>c.deskripsi.trim() !== "").map((c)=>({
                    ...c.companycutiid ? {
                        companycutiid: c.companycutiid
                    } : {},
                    companyid: selected.companyid,
                    daftarcutiid: c.daftarcutiid,
                    deskripsi: c.deskripsi,
                    jumlahhari: Number(c.jumlahhari) || 0
                }));
            const validIzin = companyIzin.filter((i)=>i.deskripsi.trim() !== "").map((i)=>({
                    ...i.companyizinid ? {
                        companyizinid: i.companyizinid
                    } : {},
                    companyid: selected.companyid,
                    daftarizinid: i.daftarizinid,
                    deskripsi: i.deskripsi,
                    jumlahhari: Number(i.jumlahhari) || 0
                }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$cutiizinApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyCuti"])(validCuti);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$cutiizinApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyIzin"])(validIzin);
            alert("Data cuti & izin berhasil disimpan!");
        } catch (err) {
            console.error("Gagal menyimpan:", err);
            alert("Gagal menyimpan data, cek console!");
        } finally{
            setSaving(false);
        }
    };
    const disabled = !selectedCompany;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold text-gray-800 mb-3",
                children: "8. Cuti dan Izin"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 mb-4",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Memuat data..."
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                    lineNumber: 282,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500",
                    value: selectedCompany,
                    onChange: (e)=>setSelectedCompany(e.target.value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Pilih Perusahaan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this),
                        companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c.name,
                                children: c.name
                            }, c.companyid, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                lineNumber: 291,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            selectedCompany && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "bg-blue-900 text-white text-lg font-bold text-center py-2 rounded-lg mb-4",
                                        children: "Tipe Cuti + Hari"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-2",
                                                            children: "Jenis Cuti"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-2",
                                                            children: "Checklist"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-2",
                                                            children: "Jumlah Hari"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: companyCuti.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: item.deskripsi,
                                                                    onChange: (e)=>handleDeskripsiChange("cuti", idx, e.target.value),
                                                                    className: "w-full px-2 py-1 text-sm ".concat(item.daftarcutiid !== 0 ? "cursor-not-allowed" : "bg-white"),
                                                                    placeholder: "Tulis jenis cuti...",
                                                                    readOnly: item.daftarcutiid !== 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: item.jumlahhari > 0,
                                                                    onChange: ()=>handleCheckboxChange("cuti", idx),
                                                                    className: "w-4 h-4 accent-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: item.jumlahhari || "",
                                                                    onChange: (e)=>handleJumlahHariChange("cuti", idx, Number(e.target.value)),
                                                                    className: "px-2 py-1 w-16 text-center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                lineNumber: 315,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAddRow("cuti"),
                                        className: "mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold",
                                        children: "+ Tambah Cuti"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "bg-blue-900 text-white text-lg font-bold text-center py-2 rounded-lg mb-4",
                                        children: "Tipe Izin + Hari"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm text-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-2",
                                                            children: "Jenis Izin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-2",
                                                            children: "Checklist"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-2",
                                                            children: "Jumlah Hari"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: companyIzin.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: item.deskripsi,
                                                                    onChange: (e)=>handleDeskripsiChange("izin", idx, e.target.value),
                                                                    className: "w-full px-2 py-1 text-sm ".concat(item.daftarizinid !== 0 ? "cursor-not-allowed" : "bg-white"),
                                                                    placeholder: "Tulis jenis izin...",
                                                                    readOnly: item.daftarizinid !== 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: item.jumlahhari > 0,
                                                                    onChange: ()=>handleCheckboxChange("izin", idx),
                                                                    className: "w-4 h-4 accent-blue-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: item.jumlahhari || "",
                                                                    onChange: (e)=>handleJumlahHariChange("izin", idx, Number(e.target.value)),
                                                                    className: "px-2 py-1 w-16 text-center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAddRow("izin"),
                                        className: "mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold",
                                        children: "+ Tambah Izin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500 italic mt-6",
                        children: "*Jika di-checklist maka akan muncul di pilihan cuti pegawai"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: saving || disabled,
                        className: "bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ".concat(saving || disabled ? "opacity-70 cursor-not-allowed" : ""),
                        children: saving ? "Menyimpan..." : "Simpan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormCutiIzin.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s(FormCutiIzin, "2ZMX99tOyh8nMrJDKFnWotULdss=");
_c = FormCutiIzin;
var _c;
__turbopack_context__.k.register(_c, "FormCutiIzin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/liburnasionalApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCompLiburNasional",
    ()=>deleteCompLiburNasional,
    "getCompLiburNasional",
    ()=>getCompLiburNasional,
    "getHariLiburNasional",
    ()=>getHariLiburNasional,
    "saveCompLiburNasional",
    ()=>saveCompLiburNasional
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id") || "http://localhost:8000";
const getHariLiburNasional = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/hariliburnasional"));
    return response.data;
};
const getCompLiburNasional = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/compliburnasional"));
    return response.data;
};
const saveCompLiburNasional = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_BASE, "/compliburnasional"), formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const deleteCompLiburNasional = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE, "/compliburnasional/").concat(id));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormHariLibur.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormHariLibur
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$liburnasionalApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/liburnasionalApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-calendar/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function toLocalYYYYMMDD(date) {
    const year = date.getFullYear();
    // getMonth() berbasis 0 (0 = Januari), jadi kita tambah 1
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
}
function FormHariLibur(param) {
    let { onNextStep, onBack } = param;
    _s();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCompany, setSelectedCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hariLiburNasional, setHariLiburNasional] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [compLiburNasional, setCompLiburNasional] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLibur, setSelectedLibur] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [namatanggal, setNamatanggal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [potongCuti, setPotongCuti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Tidak");
    const [dokumenfilename, setDokumen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //  Ambil master data & perusahaan
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormHariLibur.useEffect": ()=>{
            const fetchData = {
                "FormHariLibur.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        const [resCompanies, resHariLibur] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$liburnasionalApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHariLiburNasional"])()
                        ]);
                        setCompanies((resCompanies.data || []).sort({
                            "FormHariLibur.useEffect.fetchData": (a, b)=>a.companyid - b.companyid
                        }["FormHariLibur.useEffect.fetchData"]));
                        setHariLiburNasional(resHariLibur.data || []);
                    } catch (err) {
                        console.error("Gagal memuat data master:", err);
                        setError("Gagal memuat data perusahaan");
                    } finally{
                        setLoading(false);
                    }
                }
            }["FormHariLibur.useEffect.fetchData"];
            fetchData();
        }
    }["FormHariLibur.useEffect"], []);
    // Fungsi untuk membersihkan file
    const clearFile = ()=>{
        setDokumen(null);
        const fileInput = document.getElementById("file-upload");
        if (fileInput) {
            fileInput.value = ""; // Mereset input file browser
        }
    };
    // Fungsi untuk mereset semua input form
    const resetForm = ()=>{
        setNamatanggal("");
        setDate(new Date());
        setPotongCuti("Tidak");
        setSelectedLibur(null);
        clearFile(); // Memanggil fungsi clear file
    };
    const fetchCompLiburNasional = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FormHariLibur.useCallback[fetchCompLiburNasional]": async ()=>{
            if (!selectedCompany) {
                setCompLiburNasional([]); // Kosongkan daftar jika tidak ada perusahaan
                return;
            }
            try {
                setLoading(true);
                const selected = companies.find({
                    "FormHariLibur.useCallback[fetchCompLiburNasional].selected": (c)=>c.name === selectedCompany
                }["FormHariLibur.useCallback[fetchCompLiburNasional].selected"]);
                if (!selected) return;
                const [resCompLibur] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$liburnasionalApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompLiburNasional"])()
                ]);
                const allCompLiburNasional = resCompLibur.data || [];
                const filteredLibur = allCompLiburNasional.filter({
                    "FormHariLibur.useCallback[fetchCompLiburNasional].filteredLibur": (x)=>x.companyid === selected.companyid
                }["FormHariLibur.useCallback[fetchCompLiburNasional].filteredLibur"]);
                //  Merge daftar libur + data company
                const mergedLibur = hariLiburNasional.map({
                    "FormHariLibur.useCallback[fetchCompLiburNasional].mergedLibur": (master)=>{
                        const existing = filteredLibur.find({
                            "FormHariLibur.useCallback[fetchCompLiburNasional].mergedLibur.existing": (c)=>c.hariliburnasid === master.hariliburnasid
                        }["FormHariLibur.useCallback[fetchCompLiburNasional].mergedLibur.existing"]);
                        var _existing_compliburnasionalid, _existing_dokumenfilename, _existing_dokumen_url;
                        return {
                            compliburnasionalid: (_existing_compliburnasionalid = existing === null || existing === void 0 ? void 0 : existing.compliburnasionalid) !== null && _existing_compliburnasionalid !== void 0 ? _existing_compliburnasionalid : 0,
                            companyid: selected.companyid,
                            hariliburnasid: master.hariliburnasid,
                            startdate: master.startdate,
                            enddate: master.enddate,
                            namatanggal: master.namatanggal,
                            potongcutitahunan: existing ? existing.potongcutitahunan : undefined,
                            dokumenfilename: (_existing_dokumenfilename = existing === null || existing === void 0 ? void 0 : existing.dokumenfilename) !== null && _existing_dokumenfilename !== void 0 ? _existing_dokumenfilename : "",
                            dokumen_url: (_existing_dokumen_url = existing === null || existing === void 0 ? void 0 : existing.dokumen_url) !== null && _existing_dokumen_url !== void 0 ? _existing_dokumen_url : null
                        };
                    }
                }["FormHariLibur.useCallback[fetchCompLiburNasional].mergedLibur"]);
                // tambahkan data baru (hariliburnasid = 0)
                const newLibur = filteredLibur.filter({
                    "FormHariLibur.useCallback[fetchCompLiburNasional].newLibur": (c)=>c.hariliburnasid === 0
                }["FormHariLibur.useCallback[fetchCompLiburNasional].newLibur"]);
                const finalLibur = [
                    ...mergedLibur,
                    ...newLibur
                ];
                setCompLiburNasional(finalLibur);
            } catch (err) {
                console.error("Gagal memuat company libur:", err);
            } finally{
                setLoading(false);
            }
        }
    }["FormHariLibur.useCallback[fetchCompLiburNasional]"], [
        selectedCompany,
        hariLiburNasional,
        companies
    ]); // dependensi
    //  Ambil data compliburnasional ketika perusahaan dipilih
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormHariLibur.useEffect": ()=>{
            fetchCompLiburNasional();
        }
    }["FormHariLibur.useEffect"], [
        fetchCompLiburNasional
    ]); // Panggil fungsi useCallback
    // Mengecek apakah user pilih range atau tanggal tunggal
    const isRange = Array.isArray(date);
    //  Saat memilih keterangan libur, otomatis tampilkan tanggal di kalender
    const handleSelectKeterangan = (nama)=>{
        const libur = hariLiburNasional.find((l)=>l.namatanggal === nama);
        setSelectedLibur(libur || null);
        if (libur) {
            setDate([
                new Date(libur.startdate),
                new Date(libur.enddate)
            ]);
        } else {
            setDate(new Date());
        }
    };
    //  Upload dokumen handler
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            setDokumen(e.target.files[0]);
        } else {
            // Jika user cancel dialog, clear file
            setDokumen(null);
        }
    };
    //  Simpan data (baru atau update)
    const handleSave = async ()=>{
        if (!selectedCompany || !date) return;
        try {
            setSaving(true);
            const selected = companies.find((c)=>c.name === selectedCompany);
            if (!selected) return;
            const formData = new FormData();
            // jika user pilih dari master → pakai hariliburnasid dan compliburnasionalid
            if (selectedLibur) {
                const existing = compLiburNasional.find((x)=>x.hariliburnasid === selectedLibur.hariliburnasid);
                if (existing && existing.compliburnasionalid !== 0) {
                    formData.append("compliburnasionalid", existing.compliburnasionalid.toString());
                }
                formData.append("hariliburnasid", selectedLibur.hariliburnasid.toString());
                formData.append("namatanggal", selectedLibur.namatanggal);
            } else {
                // data baru (tidak dari master)
                formData.append("hariliburnasid", "0");
                formData.append("namatanggal", namatanggal);
            }
            formData.append("companyid", selected.companyid.toString());
            formData.append("startdate", toLocalYYYYMMDD(isRange ? date[0] : date));
            // Kirim enddate hanya jika range
            if (isRange && date[1] && date[0].getTime() !== date[1].getTime()) {
                formData.append("enddate", toLocalYYYYMMDD(date[1]));
            }
            formData.append("potongcutitahunan", potongCuti === "Ya" ? "1" : "0");
            if (dokumenfilename) formData.append("dokumenfilename", dokumenfilename);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$liburnasionalApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompLiburNasional"])(formData);
            alert("Data berhasil disimpan!");
            resetForm();
            fetchCompLiburNasional();
        } catch (err) {
            console.error("Gagal menyimpan data:", err);
            alert("Gagal menyimpan data");
        } finally{
            setSaving(false);
        }
    };
    // Hapus data compliburnasional
    const handleDelete = async (id)=>{
        if (!confirm("Apakah Anda yakin ingin menghapus data ini?")) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$liburnasionalApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCompLiburNasional"])(id);
            alert("Data berhasil dihapus!");
            fetchCompLiburNasional();
        } catch (err) {
            console.error("Gagal menghapus data:", err);
            alert("Gagal menghapus data");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold text-gray-800 mb-6",
                children: "9. Hari Libur Nasional"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 mb-3",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Memuat data..."
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                    lineNumber: 240,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500",
                    value: selectedCompany,
                    onChange: (e)=>setSelectedCompany(e.target.value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Pilih Perusahaan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c.name,
                                children: c.name
                            }, c.companyid, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                    lineNumber: 242,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            selectedCompany && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/4 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "bg-blue-900 text-white font-semibold text-center py-2 rounded-lg mb-4",
                                    children: "Masukkan/Edit Daftar Libur"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-visible",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 font-medium",
                                            children: "Keterangan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            list: "daftar-libur",
                                            type: "text",
                                            value: namatanggal,
                                            onChange: (e)=>{
                                                const value = e.target.value;
                                                setNamatanggal(value);
                                                handleSelectKeterangan(value);
                                            },
                                            placeholder: "Libur Nasional",
                                            className: "w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                            id: "daftar-libur",
                                            children: compLiburNasional.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: item.namatanggal
                                                }, idx, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-2 font-medium text-gray-800",
                                            children: "Kalender"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$calendar$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                    onChange: (value)=>{
                                                        if (Array.isArray(value)) {
                                                            const [start, end] = value;
                                                            if (start && end) {
                                                                const startDate = toLocalYYYYMMDD(start);
                                                                const endDate = toLocalYYYYMMDD(end);
                                                                // Kalau tanggal sama → single date
                                                                if (startDate === endDate) {
                                                                    setDate(start);
                                                                } else {
                                                                    setDate([
                                                                        start,
                                                                        end
                                                                    ]);
                                                                }
                                                            }
                                                        } else if (value instanceof Date) {
                                                            setDate(value);
                                                        }
                                                    },
                                                    value: date,
                                                    selectRange: true,
                                                    className: "rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-sm text-gray-600",
                                                    children: isRange && date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Dari:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                                        lineNumber: 322,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    date[0].toLocaleDateString("id-ID")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Sampai:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                                        lineNumber: 325,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    date[1].toLocaleDateString("id-ID")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Tanggal:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            date.toLocaleDateString("id-ID")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 font-medium",
                                            children: "Potong Cuti Tahunan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                            value: potongCuti,
                                            onChange: (e)=>setPotongCuti(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Ya"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Tidak"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-1 font-medium",
                                            children: "Upload Dokumen"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            id: "file-upload",
                                            accept: "application/pdf,image/*",
                                            onChange: handleFileChange,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "file-upload",
                                                    className: "cursor-pointer flex-shrink-0 rounded-lg border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                                                    children: "Pilih File"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600 flex-1 truncate overflow-hidden whitespace-nowrap",
                                                    children: dokumenfilename ? dokumenfilename.name : "Belum ada file dipilih"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this),
                                                dokumenfilename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: clearFile,
                                                    className: "flex-shrink-0 text-red-500 hover:text-red-700 text-xl font-bold",
                                                    "aria-label": "Hapus file",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSave,
                                        disabled: saving,
                                        className: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm w-full transition ".concat(saving ? "opacity-70 cursor-not-allowed" : ""),
                                        children: saving ? "Menyimpan..." : "Simpan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                        lineNumber: 389,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3/4 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "bg-blue-900 text-white font-semibold text-center py-2 rounded-lg mb-4",
                                    children: "Daftar Hari Libur Nasional"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "min-w-full border border-gray-300 text-sm text-gray-800 rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-100 text-left",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 border-b",
                                                        children: "Keterangan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 border-b",
                                                        children: "Tanggal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 border-b text-center",
                                                        children: "Potong Cuti Tahunan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 border-b",
                                                        children: "Dokumen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-2 border-b text-center",
                                                        children: "Aksi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 407,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: compLiburNasional.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2 border-b border-gray-200",
                                                            children: item.namatanggal
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2 border-b border-gray-200",
                                                            children: [
                                                                item.startdate ? toLocalYYYYMMDD(new Date(item.startdate)) : '',
                                                                " ",
                                                                item.enddate ? " / ".concat(toLocalYYYYMMDD(new Date(item.enddate))) : ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2 border-b border-gray-200 text-center",
                                                            children: item.potongcutitahunan === undefined || item.potongcutitahunan === null ? "-" : item.potongcutitahunan ? "Ya" : "Tidak"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2 border-b border-gray-200 text-center",
                                                            children: item.dokumen_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: item.dokumen_url,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-blue-600 hover:underline",
                                                                children: "Lihat Dokumen"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 27
                                                            }, this) : "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-4 py-2 border-b border-gray-200 text-center",
                                                            children: item.compliburnasionalid && item.compliburnasionalid !== 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(item.compliburnasionalid),
                                                                className: "text-red-600 hover:text-red-800 font-semibold cursor-pointer",
                                                                children: "Hapus"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 27
                                                            }, this) : "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormHariLibur.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_s(FormHariLibur, "diOK7uJ4UWvFZT8YQlJL9Z/8/m4=");
_c = FormHariLibur;
var _c;
__turbopack_context__.k.register(_c, "FormHariLibur");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/companyworkingApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCompanyWorkingBreak",
    ()=>deleteCompanyWorkingBreak,
    "deleteCompanyWorkingHours",
    ()=>deleteCompanyWorkingHours,
    "getCompanyWorkingBreak",
    ()=>getCompanyWorkingBreak,
    "getCompanyWorkingHours",
    ()=>getCompanyWorkingHours,
    "saveCompanyWorkingBreak",
    ()=>saveCompanyWorkingBreak,
    "saveCompanyWorkingHours",
    ()=>saveCompanyWorkingHours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id");
const getCompanyWorkingHours = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/companyworkinghours"));
    return response.data;
};
const saveCompanyWorkingHours = async (companyworkinghours)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/companyworkinghours"), companyworkinghours, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const deleteCompanyWorkingHours = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE, "/companyworkinghours/").concat(id));
    return response.data;
};
const getCompanyWorkingBreak = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/companyworkingbreaktime"));
    return response.data;
};
const saveCompanyWorkingBreak = async (companyworkingbreaktime)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/companyworkingbreaktime"), companyworkingbreaktime, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const deleteCompanyWorkingBreak = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE, "/companyworkingbreaktime/").concat(id));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormAturJamKerja.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormAturJamKerja
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyworkingApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FormAturJamKerja(param) {
    let { onNextStep, onBack } = param;
    _s();
    // helper: konversi "HH:MM:SS" atau "HH:MM" => "HH:MM"
    const toHM = (time)=>{
        if (!time && time !== "") return "";
        const t = String(time !== null && time !== void 0 ? time : "");
        // jika sudah "HH:MM" return langsung (safety)
        if (/^\d{1,2}:\d{2}$/.test(t)) {
            const [hh, mm] = t.split(":");
            return "".concat(hh.padStart(2, "0"), ":").concat(mm);
        }
        // jika "HH:MM:SS" atau "HH:MM:SS.sss" -> ambil dua bagian pertama
        if (t.includes(":")) {
            const parts = t.split(":");
            const hh = (parts[0] || "00").padStart(2, "0");
            const mm = (parts[1] || "00").slice(0, 2);
            return "".concat(hh, ":").concat(mm);
        }
        // fallback
        return t.slice(0, 5);
    };
    // --- STATE DATA MASTER ---
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rawHours, setRawHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rawBreaks, setRawBreaks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- STATE FILTERS ---
    const [selectedCompanyId, setSelectedCompanyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterTipe, setFilterTipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterKategori, setFilterKategori] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterSkema, setFilterSkema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- STATE UNTUK ADD / EDIT FORM (MODAL) ---
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State untuk Validasi Error di Modal
    const [validationMsg, setValidationMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tipejadwal: "Shift",
        kategori: "Pagi",
        skema: "6-1",
        durasi: 8,
        durasiistirahat: 1,
        jammasuk: "08:00",
        jamkeluar: "16:00",
        kodeshift: ""
    });
    const [formBreaks, setFormBreaks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch Data
    const fetchAll = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const [resCompanies, resHours, resBreaks] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyWorkingHours"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyWorkingBreak"])()
            ]);
            const companiesData = (resCompanies.data || []).sort((a, b)=>a.companyid - b.companyid);
            const hoursData = resHours.data || [];
            const breaksData = resBreaks.data || [];
            setCompanies(companiesData);
            setRawHours(hoursData);
            setRawBreaks(breaksData);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Gagal memuat data dari server.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormAturJamKerja.useEffect": ()=>{
            fetchAll();
        }
    }["FormAturJamKerja.useEffect"], []);
    // Logic Filter & Join
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormAturJamKerja.useMemo[filteredData]": ()=>{
            if (!selectedCompanyId) return [];
            let data = rawHours.filter({
                "FormAturJamKerja.useMemo[filteredData].data": (h)=>h.companyid === Number(selectedCompanyId)
            }["FormAturJamKerja.useMemo[filteredData].data"]);
            if (filterTipe) data = data.filter({
                "FormAturJamKerja.useMemo[filteredData]": (item)=>item.tipejadwal === filterTipe
            }["FormAturJamKerja.useMemo[filteredData]"]);
            if (filterKategori) data = data.filter({
                "FormAturJamKerja.useMemo[filteredData]": (item)=>item.kategori === filterKategori
            }["FormAturJamKerja.useMemo[filteredData]"]);
            if (filterSkema) data = data.filter({
                "FormAturJamKerja.useMemo[filteredData]": (item)=>item.skema === filterSkema
            }["FormAturJamKerja.useMemo[filteredData]"]);
            return data.map({
                "FormAturJamKerja.useMemo[filteredData]": (hourItem)=>{
                    // NOTE: normalisasi jam untuk tampilan: tampilkan hanya HH:MM
                    const myBreaks = rawBreaks.filter({
                        "FormAturJamKerja.useMemo[filteredData].myBreaks": (b)=>b.companyworkinghoursid === hourItem.companyworkinghoursid
                    }["FormAturJamKerja.useMemo[filteredData].myBreaks"]).map({
                        "FormAturJamKerja.useMemo[filteredData].myBreaks": (b)=>({
                                ...b,
                                starttime: toHM(b.starttime),
                                endtime: toHM(b.endtime)
                            })
                    }["FormAturJamKerja.useMemo[filteredData].myBreaks"]);
                    myBreaks.sort({
                        "FormAturJamKerja.useMemo[filteredData]": (a, b)=>a.starttime.localeCompare(b.starttime)
                    }["FormAturJamKerja.useMemo[filteredData]"]);
                    return {
                        ...hourItem,
                        jammasuk: toHM(hourItem.jammasuk),
                        jamkeluar: toHM(hourItem.jamkeluar),
                        breaks: myBreaks
                    };
                }
            }["FormAturJamKerja.useMemo[filteredData]"]);
        }
    }["FormAturJamKerja.useMemo[filteredData]"], [
        rawHours,
        rawBreaks,
        selectedCompanyId,
        filterTipe,
        filterKategori,
        filterSkema
    ]);
    // --- MODAL HELPERS ---
    const openCreateModal = ()=>{
        if (!selectedCompanyId) {
            alert("Mohon pilih perusahaan terlebih dahulu.");
            return;
        }
        setEditingId(null);
        setValidationMsg(null); // Reset pesan error
        setFormData({
            tipejadwal: filterTipe || "Shift",
            kategori: filterKategori || "Pagi",
            skema: filterSkema || "6-1",
            durasi: 8,
            durasiistirahat: 1,
            jammasuk: "08:00",
            jamkeluar: "16:00",
            kodeshift: ""
        });
        setFormBreaks([]);
        setIsModalOpen(true);
    };
    const openEditModal = (row)=>{
        setEditingId(row.companyworkinghoursid);
        setValidationMsg(null); // Reset pesan error
        setFormData({
            tipejadwal: row.tipejadwal,
            kategori: row.kategori,
            skema: row.skema,
            durasi: row.durasi,
            durasiistirahat: row.durasiistirahat,
            jammasuk: toHM(row.jammasuk),
            jamkeluar: toHM(row.jamkeluar),
            kodeshift: row.kodeshift || ""
        });
        setFormBreaks((row.breaks || []).map((b)=>({
                id: b.id,
                companyworkinghoursid: b.companyworkinghoursid,
                starttime: toHM(b.starttime),
                endtime: toHM(b.endtime)
            })));
        setIsModalOpen(true);
    };
    const addBreakField = ()=>{
        setFormBreaks((prev)=>[
                ...prev,
                {
                    id: null,
                    companyworkinghoursid: editingId !== null && editingId !== void 0 ? editingId : null,
                    starttime: "12:00",
                    endtime: "13:00"
                }
            ]);
    };
    const removeBreakField = (index)=>{
        setFormBreaks((prev)=>prev.filter((_, i)=>i !== index));
    };
    const updateBreakField = (index, key, value)=>{
        setFormBreaks((prev)=>prev.map((b, i)=>i === index ? {
                    ...b,
                    [key]: value
                } : b));
    };
    // --- SUBMIT HANDLER ---
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        setValidationMsg(null);
        if (!selectedCompanyId) {
            alert("Perusahaan belum dipilih.");
            console.groupEnd();
            return;
        }
        // Cek Dropdown (Tipe, Kategori, Skema)
        if (!formData.tipejadwal || !formData.kategori || !formData.skema) {
            setValidationMsg("Tipe Jadwal, Kategori, dan Skema wajib dipilih.");
            return;
        }
        // Cek Kode Shift (Wajib diisi & tidak spasi kosong)
        if (!formData.kodeshift || formData.kodeshift.trim() === "") {
            setValidationMsg("Kode Shift wajib diisi.");
            return;
        }
        // Cek Jam (Masuk & Keluar)
        if (!formData.jammasuk || !formData.jamkeluar) {
            setValidationMsg("Jam Masuk dan Jam Keluar wajib diisi.");
            return;
        }
        // Cek Durasi (Tidak boleh kosong atau minus)
        if (formData.durasi === undefined || Number(formData.durasi) <= 0) {
            setValidationMsg("Durasi Kerja wajib diisi dan harus lebih dari 0.");
            return;
        }
        if (formData.durasiistirahat === undefined || Number(formData.durasiistirahat) < 0) {
            setValidationMsg("Durasi Istirahat wajib diisi (boleh 0).");
            return;
        }
        try {
            setIsSaving(true);
            const companyidNum = Number(selectedCompanyId);
            // 1. Build Payload Jam Kerja
            const hourPayload = {
                ...editingId ? {
                    companyworkinghoursid: editingId
                } : {},
                companyid: companyidNum,
                tipejadwal: formData.tipejadwal,
                kategori: formData.kategori,
                skema: formData.skema,
                durasi: Number(formData.durasi),
                durasiistirahat: Number(formData.durasiistirahat),
                jammasuk: toHM(formData.jammasuk),
                jamkeluar: toHM(formData.jamkeluar),
                kodeshift: formData.kodeshift
            };
            // 2. Simpan Header
            const resHours = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyWorkingHours"])([
                hourPayload
            ]);
            // --- EKSTRAKSI ID ---
            let targetCompanyWorkingHoursId = editingId !== null && editingId !== void 0 ? editingId : null;
            const respUnknown = resHours;
            const extractNumberProp = (obj, propNames)=>{
                for (const p of propNames){
                    if (p in obj) {
                        const v = obj[p];
                        if (typeof v === "number") return v;
                        if (typeof v === "string" && v.trim() !== "" && !Number.isNaN(Number(v))) return Number(v);
                    }
                }
                return null;
            };
            if (respUnknown && typeof respUnknown === "object") {
                const respObj = respUnknown;
                if ("data" in respObj) {
                    const d = respObj["data"];
                    if (Array.isArray(d) && d.length > 0 && typeof d[0] === "object") {
                        const first = d[0];
                        const maybe = extractNumberProp(first, [
                            "companyworkinghoursid",
                            "id",
                            "companyworkinghours_id"
                        ]);
                        if (maybe) targetCompanyWorkingHoursId = maybe;
                    } else if (d && typeof d === "object") {
                        const obj = d;
                        const maybe = extractNumberProp(obj, [
                            "companyworkinghoursid",
                            "id",
                            "companyworkinghours_id"
                        ]);
                        if (maybe) targetCompanyWorkingHoursId = maybe;
                    }
                }
                if (!targetCompanyWorkingHoursId && "results" in respObj) {
                    const r = respObj["results"];
                    if (Array.isArray(r) && r.length > 0 && typeof r[0] === "object") {
                        const firstRes = r[0];
                        if ("data" in firstRes && firstRes["data"] && typeof firstRes["data"] === "object") {
                            const inner = firstRes["data"];
                            const maybe = extractNumberProp(inner, [
                                "companyworkinghoursid",
                                "id",
                                "companyworkinghours_id"
                            ]);
                            if (maybe) targetCompanyWorkingHoursId = maybe;
                        } else {
                            const maybe = extractNumberProp(firstRes, [
                                "companyworkinghoursid",
                                "id",
                                "companyworkinghours_id"
                            ]);
                            if (maybe) targetCompanyWorkingHoursId = maybe;
                        }
                    }
                }
            }
            // 4. Fallback GET (compare times tanpa detik)
            if (!targetCompanyWorkingHoursId) {
                const resGet = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyWorkingHours"])();
                const freshHours = resGet.data || [];
                const matched = freshHours.find((h)=>{
                    var _h_kodeshift, _formData_kodeshift;
                    return h.companyid === companyidNum && h.tipejadwal === formData.tipejadwal && h.kategori === formData.kategori && toHM(h.jammasuk) === toHM(formData.jammasuk) && toHM(h.jamkeluar) === toHM(formData.jamkeluar) && ((_h_kodeshift = h.kodeshift) !== null && _h_kodeshift !== void 0 ? _h_kodeshift : "") === ((_formData_kodeshift = formData.kodeshift) !== null && _formData_kodeshift !== void 0 ? _formData_kodeshift : "");
                });
                if (matched) targetCompanyWorkingHoursId = matched.companyworkinghoursid;
            }
            if (!targetCompanyWorkingHoursId) {
                throw new Error("Gagal mendapatkan ID Jam Kerja untuk menyimpan detail istirahat. Backend mungkin tidak mengembalikan ID.");
            }
            // 5. Build Payload Breaks (pastikan kirim HH:MM juga)
            const validBreaks = formBreaks.filter((b)=>b.starttime && b.endtime);
            if (validBreaks.length > 0) {
                const breaksPayload = validBreaks.map((b)=>({
                        ...b.id ? {
                            id: b.id
                        } : {},
                        companyworkinghoursid: targetCompanyWorkingHoursId !== null && targetCompanyWorkingHoursId !== void 0 ? targetCompanyWorkingHoursId : undefined,
                        starttime: toHM(b.starttime),
                        endtime: toHM(b.endtime)
                    }));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCompanyWorkingBreak"])(breaksPayload);
            }
            // 6. Refresh & Close
            await fetchAll();
            alert("Simpan berhasil.");
            setIsModalOpen(false);
        } catch (err) {
            console.error("Gagal menyimpan:", err);
            alert("Terjadi kesalahan saat menyimpan.");
        } finally{
            setIsSaving(false);
            console.groupEnd();
        }
    };
    const handleDeleteWorkingHours = async ()=>{
        if (!editingId) return;
        const c = confirm("Anda yakin ingin menghapus jadwal ini beserta semua detail istirahat terkait?");
        if (!c) return;
        try {
            setIsDeleting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCompanyWorkingHours"])(editingId);
            await fetchAll(); // refresh data
            setIsModalOpen(false);
            alert("Jadwal berhasil dihapus.");
        } catch (err) {
            console.error("Gagal menghapus jadwal:", err);
            alert("Gagal menghapus jadwal.");
        } finally{
            setIsDeleting(false);
        }
    };
    const handleDeleteBreak = async (index)=>{
        const b = formBreaks[index];
        // jika tidak ada id -> hanya hapus di UI
        if (!b || !b.id) {
            setFormBreaks((prev)=>prev.filter((_, i)=>i !== index));
            return;
        }
        const c = confirm("Anda yakin ingin menghapus detail istirahat ini?");
        if (!c) return;
        try {
            setIsDeleting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCompanyWorkingBreak"])(b.id);
            await fetchAll();
            // jika modal masih terbuka, juga update formBreaks agar UI modal ter-sync
            const freshBreaks = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyworkingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanyWorkingBreak"])()).data || [];
            // filter breaks yang milik editingId dan ambil untuk setFormBreaks (transform ke HM jika perlu)
            const myBreaks = (freshBreaks.filter((x)=>x.companyworkinghoursid === editingId) || []).map((x)=>({
                    id: x.id,
                    companyworkinghoursid: x.companyworkinghoursid,
                    starttime: toHM(x.starttime),
                    endtime: toHM(x.endtime)
                }));
            setFormBreaks(myBreaks);
            alert("Detail istirahat berhasil dihapus.");
        } catch (err) {
            console.error("Gagal menghapus detail istirahat:", err);
            alert("Gagal menghapus detail istirahat.");
        } finally{
            setIsDeleting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen px-6 py-10 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold text-gray-800 mb-2",
                children: "10. Atur Jam Kerja"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-6",
                children: "Data Jam Kerja & Detail Istirahat — klik baris untuk edit"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 shadow rounded-sm mb-6 bg-white",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Sedang memuat data..."
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                    lineNumber: 422,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap md:flex-nowrap gap-4 items-end justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-gray-700",
                                            children: "Perusahaan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "border border-gray-300 rounded-md px-3 py-2 text-sm w-full",
                                            value: selectedCompanyId,
                                            onChange: (e)=>setSelectedCompanyId(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Pilih Perusahaan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this),
                                                companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.companyid,
                                                        children: c.name
                                                    }, c.companyid, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-gray-700",
                                            children: "Tipe Jadwal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "border border-gray-300 rounded-md px-3 py-2 text-sm w-full",
                                            value: filterTipe,
                                            onChange: (e)=>setFilterTipe(e.target.value),
                                            disabled: !selectedCompanyId,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Semua"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Shift",
                                                    children: "Shift"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Non Shift",
                                                    children: "Non Shift"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-gray-700",
                                            children: "Kategori"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "border border-gray-300 rounded-md px-3 py-2 text-sm w-full",
                                            value: filterKategori,
                                            onChange: (e)=>setFilterKategori(e.target.value),
                                            disabled: !selectedCompanyId,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Semua"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Pagi",
                                                    children: "Pagi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Siang",
                                                    children: "Siang"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Malam",
                                                    children: "Malam"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 459,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-gray-700",
                                            children: "Skema"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "border border-gray-300 rounded-md px-3 py-2 text-sm w-full",
                                            value: filterSkema,
                                            onChange: (e)=>setFilterSkema(e.target.value),
                                            disabled: !selectedCompanyId,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Semua"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "6-1",
                                                    children: "6-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "5-2",
                                                    children: "5-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openCreateModal,
                                disabled: !selectedCompanyId || isSaving,
                                className: "bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-medium shadow disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
                                children: "+ Tambah Jadwal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                lineNumber: 491,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                    lineNumber: 424,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto rounded-sm shadow mb-10 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-blue-900 text-white text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Tipe Jadwal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Kategori"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Skema"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Durasi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Durasi Istirahat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Jam Masuk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Jam Keluar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 514,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Istirahat Mulai"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 515,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Istirahat Selesai"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-2",
                                        children: "Kode Shift"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                !selectedCompanyId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 10,
                                        className: "px-4 py-8 text-center text-gray-500 italic",
                                        children: "Pilih perusahaan untuk melihat data."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 523,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this),
                                selectedCompanyId && filteredData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 10,
                                        className: "px-4 py-8 text-center text-gray-500 italic",
                                        children: "Data tidak ditemukan untuk filter ini."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 530,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this),
                                filteredData.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-center items-center ".concat(idx % 2 === 0 ? "bg-gray-50" : "bg-white", " hover:bg-blue-50 cursor-pointer"),
                                        onClick: ()=>openEditModal(row),
                                        title: "Klik untuk edit",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3",
                                                children: row.tipejadwal
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3",
                                                children: row.kategori
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3",
                                                children: row.skema
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3",
                                                children: [
                                                    row.durasi,
                                                    " Jam"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3",
                                                children: [
                                                    row.durasiistirahat,
                                                    " Jam"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3",
                                                children: toHM(row.jammasuk)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3",
                                                children: toHM(row.jamkeluar)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top",
                                                children: row.breaks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: row.breaks.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block border-b border-blue-100 last:border-0 pb-1 pt-1",
                                                            children: toHM(b.starttime)
                                                        }, b.id, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 21
                                                }, this) : "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 550,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top",
                                                children: row.breaks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: row.breaks.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block border-b border-blue-100 last:border-0 pb-1 pt-1",
                                                            children: toHM(b.endtime)
                                                        }, b.id, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 21
                                                }, this) : "-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-2 align-top pt-3 font-mono text-gray-600",
                                                children: row.kodeshift
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                lineNumber: 576,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, row.companyworkinghoursid, true, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl w-full max-w-2xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-800",
                                    children: editingId ? "Edit Jadwal" : "Tambah Jadwal Baru"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleDeleteWorkingHours,
                                        disabled: isDeleting,
                                        className: "text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded",
                                        children: isDeleting ? "Menghapus..." : "Hapus Jadwal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                        lineNumber: 591,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                            lineNumber: 587,
                            columnNumber: 13
                        }, this),
                        validationMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Perhatian:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 606,
                                    columnNumber: 17
                                }, this),
                                " ",
                                validationMsg
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                            lineNumber: 605,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleFormSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Tipe Jadwal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.tipejadwal,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            tipejadwal: e.target.value
                                                        }),
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Shift",
                                                            children: "Shift"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 621,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Non Shift",
                                                            children: "Non Shift"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 613,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Kategori"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.kategori,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            kategori: e.target.value
                                                        }),
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Pagi",
                                                            children: "Pagi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Siang",
                                                            children: "Siang"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Malam",
                                                            children: "Malam"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 625,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 612,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Skema"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.skema,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            skema: e.target.value
                                                        }),
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "6-1",
                                                            children: "6-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 650,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "5-2",
                                                            children: "5-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 642,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Kode Shift"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.kodeshift,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            kodeshift: e.target.value
                                                        }),
                                                    placeholder: "Contoh: PAGI-A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 654,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 641,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Jam Masuk"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.jammasuk,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            jammasuk: e.target.value
                                                        }),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Jam Keluar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.jamkeluar,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            jamkeluar: e.target.value
                                                        }),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 678,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Durasi Kerja (Jam)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 0,
                                                    step: 0.5,
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.durasi,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            durasi: Number(e.target.value)
                                                        }),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 688,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-700 mb-1",
                                                    children: "Durasi Istirahat (Jam)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 0,
                                                    step: 0.5,
                                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                                    value: formData.durasiistirahat,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            durasiistirahat: Number(e.target.value)
                                                        }),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 700,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold text-gray-700",
                                                    children: "Waktu Istirahat (Detail)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: addBreakField,
                                                        className: "text-xs bg-blue-900 text-white px-3 py-1 rounded mr-2",
                                                        children: "+ Tambah Istirahat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 716,
                                            columnNumber: 17
                                        }, this),
                                        formBreaks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500 italic",
                                            children: "Belum ada detail istirahat"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 730,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2",
                                            children: formBreaks.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "time",
                                                            value: b.starttime,
                                                            onChange: (ev)=>updateBreakField(i, "starttime", ev.target.value),
                                                            className: "w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 735,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "time",
                                                            value: b.endtime,
                                                            onChange: (ev)=>updateBreakField(i, "endtime", ev.target.value),
                                                            className: "w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleDeleteBreak(i),
                                                                disabled: isDeleting,
                                                                className: "text-xs bg-red-600 text-white px-2 py-1 rounded",
                                                                title: b.id ? "Hapus dari server" : "Hapus dari UI",
                                                                children: "Hapus"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                                lineNumber: 748,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 732,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 715,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 flex justify-end gap-2 border-t border-gray-100 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded cursor-pointer",
                                            disabled: isSaving,
                                            children: "Batal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 766,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-800 cursor-pointer",
                                            disabled: isSaving,
                                            children: isSaving ? "Menyimpan..." : "Simpan Jadwal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                            lineNumber: 774,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                                    lineNumber: 765,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                            lineNumber: 610,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                    lineNumber: 586,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                lineNumber: 585,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                        lineNumber: 788,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                        lineNumber: 794,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
                lineNumber: 787,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormAturJamKerja.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_s(FormAturJamKerja, "Lq02m4WYKeGcuwwKJs6dM5+gU2I=");
_c = FormAturJamKerja;
var _c;
__turbopack_context__.k.register(_c, "FormAturJamKerja");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/menugrouproleApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteMenu",
    ()=>deleteMenu,
    "getGroupRole",
    ()=>getGroupRole,
    "getMenu",
    ()=>getMenu,
    "saveMenu",
    ()=>saveMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id");
const getGroupRole = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/grouprole"));
    return response.data;
};
const getMenu = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/menu"));
    return response.data;
};
const saveMenu = async (menu)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("".concat(API_BASE, "/menu"), menu, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const deleteMenu = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(API_BASE, "/menu/").concat(id));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormSG.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormSG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$menugrouproleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/menugrouproleApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// 1. DEFINISI MENU MASTER (HARDCODED)
const MASTER_MENU_ITEMS = [
    "Desain Perusahaan",
    "Manajemen Pengguna",
    "Dasar Kompensasi dan Benefit"
];
function FormSG(param) {
    let { onNextStep, onBack } = param;
    _s();
    // --- STATE DATA ---
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groupRoles, setGroupRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [menuList, setMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- STATE FILTER ---
    const [selectedCompany, setSelectedCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("HR");
    // --- STATE UI ---
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [disabled, setDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const MODULE_STRUCTURE = [
        {
            title: "MODUL MASTER ADMIN",
            parentid: 1
        },
        {
            title: "MODUL LAYANAN MANDIRI",
            parentid: 2
        }
    ];
    const fetchData = async ()=>{
        try {
            setLoading(true);
            const [resCompanies, resGroupRoles, resMenus] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$menugrouproleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGroupRole"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$menugrouproleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenu"])()
            ]);
            const sortedCompanies = (resCompanies.data || []).sort((a, b)=>a.companyid - b.companyid);
            setCompanies(sortedCompanies);
            setGroupRoles((resGroupRoles.data || []).sort((a, b)=>a.grouproleid - b.grouproleid));
            setMenuList(resMenus.data || []);
        } catch (err) {
            console.error("Gagal memuat data:", err);
            setError("Gagal memuat data referensi.");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormSG.useEffect": ()=>{
            fetchData();
        }
    }["FormSG.useEffect"], []);
    // --- HANDLER CHECKBOX ---
    const handleCheckboxChange = (parentMenuId, menuName, roleId, currentStatus)=>{
        // Jika belum pilih perusahaan, jangan lakukan apa-apa (atau alert)
        if (!selectedCompany) {
            alert("Mohon pilih perusahaan terlebih dahulu.");
            return;
        }
        setMenuList((prevMenus)=>{
            // 1. Cek apakah menu ini sudah ada di state menuList?
            const existingIndex = prevMenus.findIndex((m)=>m.menuname === menuName && m.parentmenuid === parentMenuId && m.companyid === Number(selectedCompany));
            // A. JIKA SUDAH ADA (Update)
            if (existingIndex !== -1) {
                const updatedMenus = [
                    ...prevMenus
                ];
                const menu = {
                    ...updatedMenus[existingIndex]
                };
                let currentIds = menu.grouprole_ids ? [
                    ...menu.grouprole_ids
                ] : [];
                if (currentStatus) {
                    currentIds = currentIds.filter((id)=>id !== roleId); // Uncheck
                } else {
                    currentIds.push(roleId); // Check
                }
                // Update format string #..#
                const newGroupRoleString = currentIds.length > 0 ? '#' + currentIds.join('#') + '#' : "";
                updatedMenus[existingIndex] = {
                    ...menu,
                    grouprole_ids: currentIds,
                    grouprole: newGroupRoleString
                };
                return updatedMenus;
            } else {
                // Buat objek menu baru
                const newMenu = {
                    menuid: 0,
                    companyid: Number(selectedCompany),
                    menuname: menuName,
                    parentmenuid: parentMenuId,
                    hrgroup: selectedType === "HR",
                    active: true,
                    grouprole_ids: [
                        roleId
                    ],
                    grouprole: "#".concat(roleId, "#")
                };
                return [
                    ...prevMenus,
                    newMenu
                ];
            }
        });
    };
    // --- BUILD PAYLOAD & SAVE ---
    const handleSave = async ()=>{
        // Validasi
        if (!selectedCompany) {
            alert("Mohon pilih perusahaan sebelum menyimpan.");
            return;
        }
        if (!selectedType) {
            alert("Mohon pilih tipe Security Group (HR / Non HR) sebelum menyimpan.");
            return;
        }
        // Siapkan payload: hanya menu yang berhubungan dengan perusahaan dan modul yang tampil di layar
        const parentIds = MODULE_STRUCTURE.map((m)=>m.parentid);
        const masterSet = new Set(MASTER_MENU_ITEMS);
        const toSave = menuList.filter((m)=>m.companyid === Number(selectedCompany) && parentIds.includes(m.parentmenuid) && masterSet.has(m.menuname)).map((m)=>{
            // Pastikan hrgroup sesuai dengan filter saat ini
            const hrgroupFlag = selectedType === "HR";
            var _m_grouprole_ids;
            // Format grouprole string jika ada
            const grouproleIds = (_m_grouprole_ids = m.grouprole_ids) !== null && _m_grouprole_ids !== void 0 ? _m_grouprole_ids : [];
            const grouproleStr = grouproleIds.length > 0 ? "#".concat(grouproleIds.join('#'), "#") : "";
            var _m_active;
            // Hanya sertakan menuid jika > 0, jika 0 -> create
            const base = {
                companyid: Number(selectedCompany),
                menuname: m.menuname,
                parentmenuid: m.parentmenuid,
                hrgroup: hrgroupFlag,
                active: (_m_active = m.active) !== null && _m_active !== void 0 ? _m_active : true,
                grouprole: grouproleStr,
                grouprole_ids: grouproleIds
            };
            if (m.menuid && m.menuid > 0) {
                // update
                return {
                    ...base,
                    menuid: m.menuid
                };
            }
            // create
            return base;
        });
        if (toSave.length === 0) {
            alert("Tidak ada perubahan untuk disimpan pada perusahaan dan tipe Security Group ini.");
            return;
        }
        try {
            setSaving(true);
            setDisabled(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$menugrouproleApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMenu"])(toSave);
            const returnedMenus = res.data || [];
            // Update state: hapus menu lama untuk perusahaan ini yang berada dalam parentIds, lalu gabungkan hasil dari backend
            setMenuList((prev)=>{
                const others = prev.filter((x)=>!(x.companyid === Number(selectedCompany) && parentIds.includes(x.parentmenuid) && masterSet.has(x.menuname)));
                return [
                    ...others,
                    ...returnedMenus
                ];
            });
            await fetchData();
            alert('Sukses menyimpan menu.');
        } catch (err) {
            console.error('Gagal menyimpan menu:', err);
            alert('Gagal menyimpan data. Silakan coba lagi.');
        } finally{
            setSaving(false);
            setDisabled(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-800 mb-6",
                        children: "11. Security Group - SG"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 rounded-lg shadow mb-6 bg-white border border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 w-full md:max-w-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",
                                            children: "Pilih Perusahaan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                                                    value: selectedCompany,
                                                    onChange: (e)=>setSelectedCompany(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Pilih Perusahaan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 19
                                                        }, this),
                                                        companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.companyid,
                                                                children: c.name
                                                            }, c.companyid, false, {
                                                                fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "fill-current h-4 w-4",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 112
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 w-full md:max-w-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",
                                            children: "Tipe Security Group"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                                                    value: selectedType,
                                                    onChange: (e)=>setSelectedType(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "HR",
                                                            children: "HR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "NON_HR",
                                                            children: "Non HR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "fill-current h-4 w-4",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 112
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden bg-white rounded-xl shadow-sm border border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse text-sm text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50 text-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 font-semibold border-b border-gray-200 min-w-[250px] sticky left-0 bg-gray-50 z-10",
                                                    children: "Modul / Menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this),
                                                groupRoles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-4 font-semibold border-b border-gray-200 text-center whitespace-nowrap min-w-[80px]",
                                                        children: role.grouprolename
                                                    }, role.grouproleid, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-gray-100",
                                        children: MODULE_STRUCTURE.map((moduleGroup)=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-blue-100/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: groupRoles.length + 1,
                                                            className: "px-6 py-3 font-bold text-blue-900 text-xs uppercase tracking-wide border-t border-blue-100",
                                                            children: moduleGroup.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 23
                                                    }, this),
                                                    MASTER_MENU_ITEMS.map((masterMenuName, idx)=>{
                                                        const dbMenu = menuList.find((m)=>m.menuname === masterMenuName && m.parentmenuid === moduleGroup.parentid && m.companyid === Number(selectedCompany) && (selectedType === "HR" ? m.hrgroup === true : m.hrgroup === false || !m.hrgroup));
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50 transition-colors group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-3 font-medium text-gray-700 border-r border-gray-100 sticky left-0 bg-white group-hover:bg-gray-50",
                                                                    children: masterMenuName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 29
                                                                }, this),
                                                                groupRoles.map((role)=>{
                                                                    var _dbMenu_grouprole_ids;
                                                                    var _dbMenu_grouprole_ids_includes;
                                                                    const isChecked = (_dbMenu_grouprole_ids_includes = dbMenu === null || dbMenu === void 0 ? void 0 : (_dbMenu_grouprole_ids = dbMenu.grouprole_ids) === null || _dbMenu_grouprole_ids === void 0 ? void 0 : _dbMenu_grouprole_ids.includes(role.grouproleid)) !== null && _dbMenu_grouprole_ids_includes !== void 0 ? _dbMenu_grouprole_ids_includes : false;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2 py-3 text-center border-r border-gray-50 last:border-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: isChecked,
                                                                            onChange: ()=>handleCheckboxChange(moduleGroup.parentid, masterMenuName, role.grouproleid, isChecked),
                                                                            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition-all disabled:bg-gray-100 disabled:cursor-not-allowed",
                                                                            disabled: !selectedCompany
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                                            lineNumber: 315,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, role.grouproleid, false, {
                                                                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 33
                                                                    }, this);
                                                                })
                                                            ]
                                                        }, "".concat(moduleGroup.parentid, "-").concat(idx), true, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                ]
                                            }, moduleGroup.parentid, true, {
                                                fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                                lineNumber: 283,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: saving || disabled,
                        className: "bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ".concat(saving || disabled ? "opacity-70 cursor-not-allowed" : ""),
                        children: saving ? "Menyimpan..." : "Simpan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormSG.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_s(FormSG, "4AAs5Az05nav+pQ+Y7JWt4QcYdg=");
_c = FormSG;
var _c;
__turbopack_context__.k.register(_c, "FormSG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/organizationApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrganization",
    ()=>getOrganization,
    "saveHierarchy",
    ()=>saveHierarchy,
    "saveNonactive",
    ()=>saveNonactive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE = ("TURBOPACK compile-time value", "http://hrmsbe.logikasistembisnis.id") || "http://localhost:8000";
const getOrganization = async (companyid)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(API_BASE, "/organization"), {
        params: {
            companyid
        }
    });
    return response.data;
};
const saveHierarchy = async (formData)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_BASE, "/organization"), formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
};
const saveNonactive = async (nonactive)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(API_BASE, "/organization/nonactive"), nonactive, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/FormOrganization.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormOrganization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/companyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$organizationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/organizationApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// Kita gunakan function declaration agar Generic <T> lebih aman di parsing TSX
function AutocompleteInput(param) {
    let { label, value, onChange, onSelect, options, placeholder, disabled = false } = param;
    _s();
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filteredOptions = options.filter((opt)=>opt.name.toLowerCase().includes(value.toLowerCase()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutocompleteInput.useEffect": ()=>{
            function handleClickOutside(event) {
                if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                    setShowDropdown(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "AutocompleteInput.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["AutocompleteInput.useEffect"];
        }
    }["AutocompleteInput.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: wrapperRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-xs block mb-1 font-medium uppercase",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "w-full border border-gray-300 rounded px-2 py-2 ".concat(disabled ? "bg-gray-100 cursor-not-allowed" : ""),
                value: value,
                onChange: (e)=>{
                    onChange(e.target.value);
                    setShowDropdown(true);
                },
                onFocus: ()=>setShowDropdown(true),
                placeholder: placeholder,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            showDropdown && filteredOptions.length > 0 && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-48 overflow-y-auto shadow-lg rounded-sm text-sm",
                children: filteredOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "px-3 py-2 hover:bg-blue-50 cursor-pointer text-gray-700",
                        onClick: ()=>{
                            onSelect(opt.original);
                            setShowDropdown(false);
                        },
                        children: opt.name
                    }, opt.id, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(AutocompleteInput, "4iVAe8BD4JrdgPPChcKULF4ZyZQ=");
_c = AutocompleteInput;
function FormOrganization(param) {
    let { onNextStep, onBack } = param;
    var _organization_find;
    _s1();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCompanyId, setSelectedCompanyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingCompanies, setLoadingCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingOrg, setLoadingOrg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMsg, setSuccessMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [organization, setOrganization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // State Form
    const [dirId, setDirId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dirName, setDirName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [divId, setDivId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [divName, setDivName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deptId, setDeptId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deptName, setDeptName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [unitName, setUnitName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dokumenFile, setDokumenFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dokumenDisplayName, setDokumenDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormOrganization.useEffect": ()=>{
            const fetchCompanies = {
                "FormOrganization.useEffect.fetchCompanies": async ()=>{
                    try {
                        setLoadingCompanies(true);
                        setError(null);
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$companyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCompanies"])();
                        const companiesData = (res.data || []).sort({
                            "FormOrganization.useEffect.fetchCompanies.companiesData": (a, b)=>a.companyid - b.companyid
                        }["FormOrganization.useEffect.fetchCompanies.companiesData"]);
                        setCompanies(companiesData);
                    } catch (err) {
                        console.error(err);
                        setError("Gagal memuat daftar perusahaan.");
                    } finally{
                        setLoadingCompanies(false);
                    }
                }
            }["FormOrganization.useEffect.fetchCompanies"];
            fetchCompanies();
        }
    }["FormOrganization.useEffect"], []);
    const fetchOrg = async (companyId)=>{
        try {
            setLoadingOrg(true);
            setError(null);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$organizationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrganization"])(companyId);
            setOrganization(res.data || []);
        } catch (err) {
            console.error(err);
            setError("Gagal memuat struktur organisasi.");
        } finally{
            setLoadingOrg(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormOrganization.useEffect": ()=>{
            if (!selectedCompanyId) {
                setOrganization(null);
                resetForm();
                return;
            }
            fetchOrg(Number(selectedCompanyId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["FormOrganization.useEffect"], [
        selectedCompanyId
    ]);
    const resetForm = ()=>{
        setDirId(null);
        setDirName("");
        setDivId(null);
        setDivName("");
        setDeptId(null);
        setDeptName("");
        setUnitName("");
        handleClearFile();
        setError(null);
        setSuccessMsg(null);
    };
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setDokumenFile(e.target.files[0]);
        }
    };
    const handleClearFile = ()=>{
        setDokumenFile(null);
        setDokumenDisplayName("");
        const fileInput = document.getElementById("file-upload");
        if (fileInput) fileInput.value = "";
    };
    // --- BUILD OPTIONS (TYPED) ---
    // 1. Options untuk Directorate (Generic T = CompanyDirectorate)
    const directorateOptions = (organization || []).filter((d)=>d.active).map((d)=>({
            id: d.companydirectorateid,
            name: d.directoratename,
            original: d
        }));
    // 2. Options untuk Division (Generic T = CompanyDivision)
    const divisionOptions = dirId ? ((organization === null || organization === void 0 ? void 0 : (_organization_find = organization.find((d)=>d.companydirectorateid === dirId)) === null || _organization_find === void 0 ? void 0 : _organization_find.divisions) || []).filter((d)=>d.active).map((d)=>({
            id: d.companydivisionid,
            name: d.divisionname,
            original: d
        })) : [];
    // 3. Options untuk Department (Generic T = CompanyDepartment)
    const getDepartmentOptions = ()=>{
        var _dir_divisions;
        if (!dirId || !divId) return [];
        const dir = organization === null || organization === void 0 ? void 0 : organization.find((d)=>d.companydirectorateid === dirId);
        const div = dir === null || dir === void 0 ? void 0 : (_dir_divisions = dir.divisions) === null || _dir_divisions === void 0 ? void 0 : _dir_divisions.find((v)=>v.companydivisionid === divId);
        return ((div === null || div === void 0 ? void 0 : div.departments) || []).filter((d)=>d.active).map((d)=>({
                id: d.companydepartmentid,
                name: d.departmentname,
                original: d
            }));
    };
    const departmentOptions = getDepartmentOptions();
    // --- SAVE HANDLER ---
    const handleSave = async ()=>{
        setError(null);
        setSuccessMsg(null);
        if (!selectedCompanyId) {
            setError("Pilih perusahaan terlebih dahulu.");
            return;
        }
        // Validasi
        if (!dirName.trim()) {
            setError("Nama Direktorat wajib diisi.");
            return;
        }
        if (divName.trim() && !dirName.trim()) {
            setError("Isi Direktorat sebelum mengisi Divisi.");
            return;
        }
        if (deptName.trim() && !divName.trim()) {
            setError("Isi Divisi sebelum mengisi Department.");
            return;
        }
        if (unitName.trim() && !deptName.trim()) {
            setError("Isi Department sebelum mengisi Unit Kerja.");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("companyid", String(selectedCompanyId));
            if (dirId) formData.append("companydirectorateid", String(dirId));
            formData.append("directoratename", dirName);
            if (divName.trim()) {
                if (divId) formData.append("companydivisionid", String(divId));
                formData.append("divisionname", divName);
            }
            if (deptName.trim()) {
                if (deptId) formData.append("companydepartmentid", String(deptId));
                formData.append("departmentname", deptName);
            }
            if (unitName.trim()) {
                formData.append("unitkerjaname", unitName);
            }
            if (dokumenDisplayName.trim()) {
                formData.append("dokumenname", dokumenDisplayName);
            }
            if (dokumenFile) formData.append("dokumenfile", dokumenFile, dokumenFile.name);
            formData.append("active", "true");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$organizationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveHierarchy"])(formData);
            setSuccessMsg("Data berhasil disimpan!");
            fetchOrg(Number(selectedCompanyId));
            resetForm();
        } catch (err) {
            console.error(err);
            setError("Gagal menyimpan data.");
        }
    };
    const buildRows = ()=>{
        if (!organization) return [];
        const rows = [];
        organization.forEach((dir)=>{
            if (!dir.active) return;
            if (!dir.divisions || dir.divisions.length === 0) {
                rows.push({
                    directorateId: dir.companydirectorateid,
                    directoratename: dir.directoratename,
                    divisionId: null,
                    divisionname: "-",
                    departmentId: null,
                    departmentname: "-",
                    unitId: null,
                    unitkerjaname: null
                });
                return;
            }
            dir.divisions.forEach((div)=>{
                if (!div.active) return;
                if (!div.departments || div.departments.length === 0) {
                    rows.push({
                        directorateId: dir.companydirectorateid,
                        directoratename: dir.directoratename,
                        divisionId: div.companydivisionid,
                        divisionname: div.divisionname,
                        departmentId: null,
                        departmentname: "-",
                        unitId: null,
                        unitkerjaname: null
                    });
                    return;
                }
                div.departments.forEach((dep)=>{
                    if (!dep.active) return;
                    const activeUnits = (dep.unit_kerjas || []).filter((u)=>u && u.active) || [];
                    if (activeUnits.length === 0) {
                        rows.push({
                            directorateId: dir.companydirectorateid,
                            directoratename: dir.directoratename,
                            divisionId: div.companydivisionid,
                            divisionname: div.divisionname,
                            departmentId: dep.companydepartmentid,
                            departmentname: dep.departmentname,
                            unitId: null,
                            unitkerjaname: null
                        });
                    } else {
                        activeUnits.forEach((u)=>{
                            var _u_dokumenname, _u_dokumen_url;
                            rows.push({
                                directorateId: dir.companydirectorateid,
                                directoratename: dir.directoratename,
                                divisionId: div.companydivisionid,
                                divisionname: div.divisionname,
                                departmentId: dep.companydepartmentid,
                                departmentname: dep.departmentname,
                                unitId: u.companyunitkerjaid,
                                unitkerjaname: u.unitkerjaname,
                                dokumenname: (_u_dokumenname = u.dokumenname) !== null && _u_dokumenname !== void 0 ? _u_dokumenname : null,
                                dokumen_url: (_u_dokumen_url = u.dokumen_url) !== null && _u_dokumen_url !== void 0 ? _u_dokumen_url : null
                            });
                        });
                    }
                });
            });
        });
        return rows;
    };
    const rows = buildRows();
    // --- HANDLE NONACTIVE ---
    const handleNonactive = async (row)=>{
        if (!selectedCompanyId) return;
        // 1. Konfirmasi
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menonaktifkan data ini?");
        if (!isConfirmed) return;
        try {
            setLoadingOrg(true);
            const payload = {
                companyid: Number(selectedCompanyId),
                active: false
            };
            if (row.unitId) {
                payload.companyunitkerjaid = row.unitId;
            } else if (row.departmentId) {
                payload.companydepartmentid = row.departmentId;
            } else if (row.divisionId) {
                payload.companydivisionid = row.divisionId;
            } else {
                payload.companydirectorateid = row.directorateId;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$organizationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveNonactive"])(payload);
            fetchOrg(Number(selectedCompanyId));
        } catch (err) {
            console.error(err);
            setError("Gagal menonaktifkan data.");
            setLoadingOrg(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 bg-white text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4",
                children: "12. HIRARKI ORGANISASI"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 px-5",
                children: loadingCompanies ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Memuat data perusahaan..."
                }, void 0, false, {
                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500",
                    value: selectedCompanyId,
                    onChange: (e)=>setSelectedCompanyId(e.target.value === "" ? "" : Number(e.target.value)),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Pilih Perusahaan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this),
                        companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c.companyid,
                                children: c.name
                            }, c.companyid, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 431,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                    lineNumber: 422,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex gap-4 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/4 space-y-4 px-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-2 bg-blue-900 text-white rounded-sm text-sm font-medium",
                                children: "Tambah Hirarki Organisasi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-600 text-xs bg-red-50 p-2 rounded border border-red-200",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 446,
                                columnNumber: 21
                            }, this),
                            successMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-green-600 text-xs bg-green-50 p-2 rounded border border-green-200",
                                children: successMsg
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 447,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutocompleteInput, {
                                label: "Direktorat",
                                value: dirName,
                                options: directorateOptions,
                                onChange: (val)=>{
                                    setDirName(val);
                                    setDirId(null);
                                    setDivId(null);
                                    setDivName("");
                                    setDeptId(null);
                                    setDeptName("");
                                },
                                onSelect: (item)=>{
                                    setDirName(item.directoratename);
                                    setDirId(item.companydirectorateid);
                                    setDivId(null);
                                    setDivName("");
                                    setDeptId(null);
                                    setDeptName("");
                                },
                                placeholder: "Nama direktorat",
                                disabled: !selectedCompanyId
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutocompleteInput, {
                                label: "Divisi",
                                value: divName,
                                options: divisionOptions,
                                onChange: (val)=>{
                                    setDivName(val);
                                    setDivId(null);
                                    setDeptId(null);
                                    setDeptName("");
                                },
                                onSelect: (item)=>{
                                    setDivName(item.divisionname);
                                    setDivId(item.companydivisionid);
                                    setDeptId(null);
                                    setDeptName("");
                                },
                                placeholder: "Nama divisi",
                                disabled: !dirName
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutocompleteInput, {
                                label: "Department",
                                value: deptName,
                                options: departmentOptions,
                                onChange: (val)=>{
                                    setDeptName(val);
                                    setDeptId(null);
                                },
                                onSelect: (item)=>{
                                    setDeptName(item.departmentname);
                                    setDeptId(item.companydepartmentid);
                                },
                                placeholder: "Nama department",
                                disabled: !divName
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs block mb-1 font-medium uppercase",
                                        children: "Unit Kerja"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full border border-gray-300 rounded px-2 py-2 ".concat(!deptName ? "bg-gray-100" : ""),
                                        value: unitName,
                                        onChange: (e)=>setUnitName(e.target.value),
                                        placeholder: "Nama unit kerja",
                                        disabled: !deptName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs block mb-1 font-medium uppercase",
                                        children: "Upload Dokumen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        id: "file-upload",
                                        onChange: handleFileChange,
                                        className: "hidden",
                                        disabled: !unitName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "file-upload",
                                                className: "cursor-pointer flex-shrink-0 rounded border border-gray-300 px-3 py-2 text-xs font-medium transition ".concat(!unitName ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-50 text-gray-700 hover:bg-gray-100"),
                                                children: "Pilih File"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 529,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 truncate flex-1",
                                                children: dokumenFile ? dokumenFile.name : "Belum ada file dipilih"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 536,
                                                columnNumber: 15
                                            }, this),
                                            dokumenFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleClearFile,
                                                className: "text-red-500 hover:text-red-700 font-bold px-1",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    dokumenFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 animate-in fade-in slide-in-from-top-1 duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs block mb-1 font-medium",
                                                children: "NAMA DOKUMEN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "w-full border border-gray-300 rounded px-2 py-2",
                                                value: dokumenDisplayName,
                                                onChange: (e)=>setDokumenDisplayName(e.target.value),
                                                placeholder: "Nama display dokumen..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 553,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    disabled: !selectedCompanyId,
                                    className: "w-full text-white px-4 py-2 rounded cursor-pointer ".concat(!selectedCompanyId ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"),
                                    children: "+ Tambah"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3/4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto rounded-sm shadow mb-10 bg-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-full border-collapse text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-blue-900 text-white text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2",
                                                    children: "DIREKTORAT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2",
                                                    children: "DIVISI"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2",
                                                    children: "DEPARTMENT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2",
                                                    children: "UNIT KERJA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2",
                                                    children: "DOKUMEN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2",
                                                    children: "AKSI"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 579,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: loadingOrg ? Array.from({
                                            length: 3
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "odd:bg-white even:bg-gray-50 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 6,
                                                    className: "px-4 py-4 text-gray-400 animate-pulse",
                                                    children: "Loading data..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 23
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 592,
                                                columnNumber: 21
                                            }, this)) : !selectedCompanyId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 6,
                                                className: "px-4 py-6 text-center text-gray-500",
                                                children: "Pilih perusahaan untuk melihat data."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 598,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                            lineNumber: 597,
                                            columnNumber: 19
                                        }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 6,
                                                className: "px-4 py-6 text-center text-gray-500",
                                                children: "Belum ada data struktur organisasi."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 604,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                            lineNumber: 603,
                                            columnNumber: 19
                                        }, this) : rows.map((r, i)=>{
                                            var _r_unitkerjaname;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "odd:bg-white even:bg-gray-50 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 align-top pt-3",
                                                        children: r.directoratename
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 align-top pt-3",
                                                        children: r.divisionname
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 align-top pt-3",
                                                        children: r.departmentname
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 align-top pt-3",
                                                        children: (_r_unitkerjaname = r.unitkerjaname) !== null && _r_unitkerjaname !== void 0 ? _r_unitkerjaname : "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 align-top pt-3",
                                                        children: r.dokumen_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: r.dokumen_url,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-blue-600 hover:underline",
                                                            children: r.dokumenname || "Unduh"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 27
                                                        }, this) : "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 align-top pt-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleNonactive(r),
                                                            className: "px-2 py-1 rounded-sm bg-red-600 text-white hover:bg-red-700 transition",
                                                            children: "Nonaktif"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                                lineNumber: 610,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                                lineNumber: 578,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                            lineNumber: 577,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full",
                        children: "Kembali"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextStep,
                        className: "bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full",
                        children: "Lanjut"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
                lineNumber: 640,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/FormOrganization.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
_s1(FormOrganization, "dtqxcorNRKkkGf1M462vbWN/8f8=");
_c1 = FormOrganization;
var _c, _c1;
__turbopack_context__.k.register(_c, "AutocompleteInput");
__turbopack_context__.k.register(_c1, "FormOrganization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/Form11.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Form11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Form11() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-white text-gray-900 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold mb-4",
                children: [
                    "13. KELOMPOK JABATAN ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        children: "(JOB FAMILY)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                        lineNumber: 8,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-[300px_100px_1fr] gap-4 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-900 text-white text-sm font-bold text-center py-2 rounded-t",
                                        children: "MASUKAN NAMA KELOMPOK JABATAN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-300 rounded-b p-2 text-xs bg-gray-50",
                                        children: [
                                            "PRODUKSI (CONTOH) free text",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                                lineNumber: 22,
                                                columnNumber: 15
                                            }, this),
                                            "tambah"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-right text-xs text-gray-500 mt-1",
                                        children: "Open text"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-900 text-white text-sm font-bold text-center py-2 rounded-t",
                                        children: "MASUKAN NAMA SUB-KELOMPOK JABATAN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-300 rounded-b p-2 text-xs bg-gray-50",
                                        children: "MANAJEMEN PRODUKSI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-right text-xs text-gray-500 mt-1",
                                        children: "Open text"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-black text-white text-xs px-3 py-2 rounded flex items-center gap-2",
                                children: "UPLOAD DOKUMEN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-gray-600 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "* Job Family adalah pengelompokan utama berdasarkan fungsi atau divisi besar, seperti Produksi, Teknik, Keuangan, dll."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "* Sub-Job Family adalah pengelompokan lebih spesifik di dalam Job Family, misalnya dalam Produksi ada Manajemen Produksi dan Operasional Produksi."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "* Posisi adalah jabatan atau posisi spesifik yang diisi oleh satu orang karyawan, seperti Direktur Produksi, Operator Produksi, Kepala Bagian Keuangan, dll."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-start items-center gap-10 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded",
                                children: "Tambah"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded",
                                children: "Tambah"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full text-xs border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-blue-900 text-white text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1 border",
                                                children: "Kelompok Jabatan (Job Family)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1 border",
                                                children: "Kode Job Family"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1 border",
                                                children: "Sub-Kelompok Jabatan (Sub-Job Family)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1 border",
                                                children: "Kode Jabatan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        [
                                            "Manajemen Eksekutif",
                                            "JF00000001",
                                            "Manajemen Produksi",
                                            "JC00000001"
                                        ],
                                        [
                                            "Produksi",
                                            "JF00000002",
                                            "Pengawasan Produksi",
                                            "JC00000002"
                                        ],
                                        [
                                            "Teknik & Pemeliharaan",
                                            "JF00000003",
                                            "Teknik Mesin",
                                            "JC00000003"
                                        ],
                                        [
                                            "Keuangan & Akuntansi",
                                            "JF00000004",
                                            "Utilitas & Perawatan",
                                            "JC00000004"
                                        ],
                                        [
                                            "Pemasaran & Penjualan",
                                            "JF00000005",
                                            "Keuangan",
                                            "JC00000005"
                                        ],
                                        [
                                            "Logistik & Gudang",
                                            "JF00000006",
                                            "Marketing",
                                            "JC00000006"
                                        ],
                                        [
                                            "Administrasi Umum",
                                            "JF00000007",
                                            "Gudang",
                                            "JC00000007"
                                        ],
                                        [
                                            "Quality Control",
                                            "JF00000008",
                                            "Manajemen SDM",
                                            "JC00000008"
                                        ],
                                        [
                                            "SDM",
                                            "JF00000009",
                                            "Rekrutmen & Seleksi",
                                            "JC00000009"
                                        ],
                                        [
                                            "K3",
                                            "JF00000010",
                                            "Kesehatan, Keselamatan, dan Lingkungan (K3)",
                                            "JC00000010"
                                        ]
                                    ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "even:bg-gray-50",
                                            children: row.map((cell, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-1 border",
                                                    children: cell
                                                }, j, false, {
                                                    fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this))
                                        }, i, false, {
                                            fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/Form11.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Form11;
var _c;
__turbopack_context__.k.register(_c, "Form11");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/Form12.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Form13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Form13() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Form13.useEffect": ()=>{
            if (!containerRef.current) return;
            // Ambil semua button di kolom kiri
            const buttons = containerRef.current.querySelectorAll("button[data-label]");
            let maxWidth = 0;
            // Cari button dengan teks terpanjang
            buttons.forEach({
                "Form13.useEffect": (btn)=>{
                    const width = btn.offsetWidth;
                    if (width > maxWidth) maxWidth = width;
                }
            }["Form13.useEffect"]);
            // Terapkan lebar terpanjang ke semua button
            buttons.forEach({
                "Form13.useEffect": (btn)=>{
                    btn.style.width = "".concat(maxWidth, "px");
                }
            }["Form13.useEffect"]);
        }
    }["Form13.useEffect"], []);
    const fields = [
        {
            label: "PERUSAHAAN",
            placeholder: "List Box"
        },
        {
            label: "JOB FAMILY",
            placeholder: "Free text"
        },
        {
            label: "NAMA POSISI",
            placeholder: "Free text"
        },
        {
            label: "SUB JOB FAMILY",
            placeholder: "Free text"
        },
        {
            label: "MELAPOR KEPADA",
            placeholder: "Free text"
        },
        {
            label: "KODE POSISI",
            value: "TER-GENERATE OTOMATIS JC0000001",
            disabled: true
        },
        {
            label: "UNIT KERJA",
            placeholder: "List Box"
        },
        {
            label: "KODE KELOMPOK JABATAN",
            value: "TER-GENERATE OTOMATIS",
            disabled: true
        },
        {
            label: "DEPARTEMEN",
            placeholder: "Free text"
        },
        {
            label: "KODE SUB-KELOMPOK JABATAN",
            value: "TER-GENERATE OTOMATIS",
            disabled: true
        },
        {
            label: "DIVISI",
            placeholder: "Free text"
        },
        {
            label: "LOREM IPSUM",
            placeholder: "Free text"
        },
        {
            label: "DIREKTORAT",
            placeholder: "Free text"
        },
        {
            label: "LOREM IPSUM",
            placeholder: "Free text"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white px-12 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-6",
                children: "13. JOB REPOSITORY - FORM"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "grid grid-cols-2 gap-x-12 gap-y-4",
                children: fields.map((field, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-label": true,
                                className: "bg-[#0b2c66] text-white font-semibold text-sm px-4 py-2 rounded flex-shrink-0 text-center",
                                children: field.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            field.disabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: field.value,
                                disabled: true,
                                className: "ml-2 w-full border border-gray-200 bg-gray-100 px-3 py-2 rounded text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: field.placeholder,
                                className: "ml-2 w-full border border-gray-200 bg-[#f5f9ff] px-3 py-2 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-start mt-8 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-green-500 text-white font-semibold text-xs px-4 py-2 rounded-full",
                        children: "SIMPAN SEBAGAI TEMPLATE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-full",
                        children: "UPLOAD TEMPLATE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/Form12.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Form13, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = Form13;
var _c;
__turbopack_context__.k.register(_c, "Form13");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desainperusahaan/Form13.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Form13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Form13() {
    const data = [
        {
            perusahaan: "PT. Kamu Ada Aja",
            namaPosisi: "DIREKTUR UTAMA",
            melaporKepada: "-",
            unitKerja: "PT. Kamu Ada Aja",
            departemen: "PT. Kamu Ada Aja",
            subKelJabatan: "PT. Kamu Ada Aja"
        },
        {
            perusahaan: "PT. Kamu Ada Aja",
            namaPosisi: "KEPALA BAGIAN PRODUKSI",
            melaporKepada: "DIREKTUR PRODUKSI",
            unitKerja: "PT. Kamu Ada Aja",
            departemen: "PT. Kamu Ada Aja",
            subKelJabatan: "PT. Kamu Ada Aja"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold mb-4",
                children: "14. JOB REPOSITORY - LIST"
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto bg-white shadow-md rounded-lg ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-[1400px] w-full text-sm text-left text-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-blue-900 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "PERUSAHAAN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "NAMA POSISI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "MELAPOR KEPADA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "UNIT KERJA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "DEPARTEMEN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 font-semibold",
                                        children: "SUB-KELOMPOK JABATAN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: data.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: index % 2 === 0 ? "bg-white" : "bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2",
                                            children: row.perusahaan
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2",
                                            children: row.namaPosisi
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2",
                                            children: row.melaporKepada
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2",
                                            children: row.unitKerja
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2",
                                            children: row.departemen
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-2",
                                            children: row.subKelJabatan
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desainperusahaan/Form13.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Form13;
var _c;
__turbopack_context__.k.register(_c, "Form13");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesainPerusahaan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompany$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormCompany.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompanyDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormCompanyDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompanyDesign$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormCompanyDesign.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompanyBaseOrgStruc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormCompanyBaseOrgStruc.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormHRRule$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormHRRule.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCutiIzin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormCutiIzin.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormHariLibur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormHariLibur.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormAturJamKerja$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormAturJamKerja.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormSG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormSG.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormOrganization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/FormOrganization.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$Form11$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/Form11.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$Form12$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/Form12.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$Form13$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desainperusahaan/Form13.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function DesainPerusahaan() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompany$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onNextStep: ()=>setStep(2)
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                lineNumber: 23,
                columnNumber: 29
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompanyDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onNextStep: ()=>setStep(3),
                onBack: ()=>setStep(1)
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, this),
            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompanyDesign$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNextStep: ()=>setStep(4),
                    onBack: ()=>setStep(2)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                    lineNumber: 32,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCompanyBaseOrgStruc$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onNextStep: ()=>setStep(5),
                onBack: ()=>setStep(3)
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this),
            step === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormHRRule$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNextStep: ()=>setStep(6),
                    onBack: ()=>setStep(4)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                    lineNumber: 46,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            step === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormCutiIzin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNextStep: ()=>setStep(7),
                    onBack: ()=>setStep(5)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                    lineNumber: 54,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            step === 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormHariLibur$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNextStep: ()=>setStep(8),
                    onBack: ()=>setStep(6)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                    lineNumber: 62,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            step === 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormAturJamKerja$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNextStep: ()=>setStep(9),
                    onBack: ()=>setStep(7)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                    lineNumber: 70,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            step === 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormSG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNextStep: ()=>setStep(10),
                    onBack: ()=>setStep(8)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                    lineNumber: 78,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            step === 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$FormOrganization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNextStep: ()=>setStep(11),
                    onBack: ()=>setStep(9)
                }, void 0, false, {
                    fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                    lineNumber: 85,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            step === 11 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$Form11$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 justify-end mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(10),
                                className: "bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition",
                                children: "Kembali"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(12),
                                className: "bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition",
                                children: "Simpan & Lanjut"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            step === 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$Form12$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 justify-end mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(11),
                                className: "bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition",
                                children: "Kembali"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(13),
                                className: "bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition",
                                children: "Simpan & Lanjut"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            step === 13 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desainperusahaan$2f$Form13$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 justify-end mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(12),
                                className: "bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition",
                                children: "Kembali"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(13),
                                className: "bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition",
                                children: "Kirim"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(admin)/master-admin/desain-perusahaan/page.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(DesainPerusahaan, "M88kfgrd7Unvr/hfMAIVxST1ckg=");
_c = DesainPerusahaan;
var _c;
__turbopack_context__.k.register(_c, "DesainPerusahaan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_17669310._.js.map