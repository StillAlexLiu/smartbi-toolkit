import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts'

// 获取 methods 目录下的所有服务文件作为入口点
const getEntries = () => {
    const entries: Record<string, string> = {};

    // 主入口保持不变
    entries['index'] = './src/index.ts';
    entries['vite-plugin-smartbi'] = './src/vite-plugin-smartbi/index.ts';
    entries['vite-plugin-smartbix'] = './src/vite-plugin-smartbix/index.ts';

    // 添加 methods 目录下的所有服务文件
    const serviceFiles: string[] = [
        'AnalysisReportService',
        'BusinessThemeService',
        'BusinessViewService',
        'CatalogService',
        'ClientCombinedReportService',
        'ClientInsightService',
        'ClientReportService',
        'CombinedReportService',
        'DataSourceService',
        'GraphicReportService',
        'InsightReport',
        'MetadataService',
        'OfficeReport',
        'OfficeReportService',
        'OltpMetadataService',
        'ParameterService',
        'PoolService',
        'PortalService',
        'Report',
        'SSReport',
        'ScheduleTaskService',
        'SimpleReportService',
        'SpreadSheetReportService',
        'SystemConfigService',
        'TimeConsuming',
        'TimeConsumingService',
        'UserManagerService'
    ];

    serviceFiles.forEach(file => {
        entries[file] = `./src/methods/${file}.ts`;
    });

    return entries;
};

export default defineConfig({
    build: {
        lib: {
            entry: getEntries(),
            formats: ['es', 'cjs'],
            // fileName: (format, entryName) => {
            //     const ext = format === 'cjs' ? '.cjs' : '.js';
            //     // 对于非主入口的文件，将其放在 methods 目录下以匹配 d.ts 的位置
            //     if (entryName !== 'index') {
            //         return `methods/${entryName}.${format}${ext}`;
            //     }
            //     return `${entryName}.${format}${ext}`;
            // },
        },
        rollupOptions: {
            external: [
                'axios'
            ],
            output:{
                globals: {
                    'axios': 'axios'
                }
            }
        },
        outDir: './dist',
    },
    plugins: [dts()],
});
