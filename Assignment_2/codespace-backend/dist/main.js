"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mongoose_1 = require("mongoose");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    mongoose_1.default.connection.on('connected', () => {
        console.log('Successfully connected to MongoDB');
    });
    mongoose_1.default.connection.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err);
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map