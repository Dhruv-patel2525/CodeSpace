export declare class MailerService {
    private transporter;
    constructor();
    sendPasswordResetEmail(to: string, resetToken: string): Promise<void>;
}
