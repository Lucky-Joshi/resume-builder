declare module "pdf-parse" {
  function pdfParse(
    dataBuffer: Buffer,
    options?: { pagerender?: (pageData: { pageIndex: number }) => string; max?: number }
  ): Promise<{ text: string; numpages: number; numrender: number; info: Record<string, unknown>; metadata: Record<string, unknown>; version: string }>;
  export default pdfParse;
}

declare module "pdf-parse/lib/pdf-parse.js" {
  function pdfParse(
    dataBuffer: Buffer,
    options?: { pagerender?: (pageData: { pageIndex: number }) => string; max?: number }
  ): Promise<{ text: string; numpages: number; numrender: number; info: Record<string, unknown>; metadata: Record<string, unknown>; version: string }>;
  export default pdfParse;
}
