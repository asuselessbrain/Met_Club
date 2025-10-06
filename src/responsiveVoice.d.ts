// src/types/responsiveVoice.d.ts

interface ResponsiveVoiceOptions {
    rate?: number;       // 0.1–2
    pitch?: number;      // 0–2
    volume?: number;     // 0–1
    onstart?: () => void;
    onend?: () => void;
    onpause?: () => void;
    onresume?: () => void;
}

interface ResponsiveVoice {
    speak(text: string, voice?: string, options?: ResponsiveVoiceOptions): void;
    cancel(): void;
    pause(): void;
    resume(): void;
    isPlaying(): boolean;
    getVoices(): string[];
}

declare const responsiveVoice: ResponsiveVoice;
