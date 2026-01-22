import {defineConfig} from "vite";
import dts from 'vite-plugin-dts'

export default defineConfig({
    base: './',
    plugins: [dts()],
    build: {
        minify: true,
        lib: {
            entry: {
                SmartbiToolkit: './src/index.ts',
                CatalogService: './src/methods/CatalogService.ts',
                AnalysisReportService: './src/methods/AnalysisReportService.ts',
                BusinessThemeService: './src/methods/BusinessThemeService.ts',
                BusinessViewService: './src/methods/BusinessViewService.ts',
                ClientCombinedReportService: './src/methods/ClientCombinedReportService.ts',
                ClientInsightService: './src/methods/ClientInsightService.ts',
                ClientReportService: './src/methods/ClientReportService.ts',
                CombinedReportService: './src/methods/CombinedReportService.ts',
                DataSourceService: './src/methods/DataSourceService.ts',
                GraphicReportService: './src/methods/GraphicReportService.ts',
                InsightReport: './src/methods/InsightReport.ts',
                MetadataService: './src/methods/MetadataService.ts',
                OfficeReport: './src/methods/OfficeReport.ts',
                OfficeReportService: './src/methods/OfficeReportService.ts',
                OltpMetadataService: './src/methods/OltpMetadataService.ts',
                ParameterService: './src/methods/ParameterService.ts',
                PoolService: './src/methods/PoolService.ts',
                PortalService: './src/methods/PortalService.ts',
                Report: './src/methods/Report.ts',
                SSReport: './src/methods/SSReport.ts',
                ScheduleTaskService: './src/methods/ScheduleTaskService.ts',
                SimpleReportService: './src/methods/SimpleReportService.ts',
                SpreadSheetReportService: './src/methods/SpreadSheetReportService.ts',
                SystemConfigService: './src/methods/SystemConfigService.ts',
                TimeConsuming: './src/methods/TimeConsuming.ts',
                TimeConsumingService: './src/methods/TimeConsumingService.ts',
                UserManagerService: './src/methods/UserManagerService.ts',
            },
            // entry:'./src/index.ts',
            name: 'smartbi-toolkit',
            formats: ['es'],
            fileName: (format: string, entryName: string) => `${entryName}.${format}.js`,
        },
        rolldownOptions: {
            external: ['axios'],
        }
    },
    server: {
        proxy: {
            '/smartbi': {
                target: 'http://smartbi.dlmrsj.cn:28080/smartbi',
                rewrite: (path) => path.replace(/^\/smartbi/, '/'),
            },
            '/smartbix': {
                // target: 'http://localhost:18080/smartbix',
                target: 'http://192.168.100.167:18080/smartbix',
                rewrite: (path) => path.replace(/^\/smartbix/, '/'),
            },
        },
    },
})
