import { LoginGuard } from './guards/login.guard';
import { StorageService } from './storage/storage.service';

export const services = [LoginGuard, StorageService];
