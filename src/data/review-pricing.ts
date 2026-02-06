export interface IReviewPackage {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    highlight?: boolean;
    buttonText: string;
    buttonLink: string; // Placeholder for Mollie link
}

export const reviewPackages: IReviewPackage[] = [
    {
        id: 'small',
        name: 'Start Pakket',
        price: 179,
        description: 'Perfect om te beginnen met reviews verzamelen.',
        features: [
            'Stickers voor op de deur (met QR)',
            'NFC tas (opent review URL)',
            'Bordje voor op het bureau',
            'Samenwerking met Google Reviews',
            'Exclusief voor jouw niche'
        ],
        highlight: false,
        buttonText: 'Bestel Nu',
        buttonLink: '#' // TODO: Add Mollie Link
    },
    {
        id: 'large',
        name: 'Groei Pakket',
        price: 279,
        description: 'Alles dubbel voor maximale zichtbaarheid.',
        features: [
            'Dubbele hoeveelheid stickers',
            '2x NFC tas',
            '2x Bordje voor op het bureau',
            'Eigen dashboard toegang',
            'Mockup generator toegang',
            'Beste keuze voor MKB'
        ],
        highlight: true,
        buttonText: 'Bestel Nu',
        buttonLink: '#' // TODO: Add Mollie Link
    },
    {
        id: 'custom',
        name: 'Custom / Agency',
        price: 0, // 0 indicates "On Request" or handled differently in UI
        description: 'Voor grote organisaties of specifieke wensen.',
        features: [
            'Alles op maat gemaakt',
            'White-label opties',
            'Volume korting',
            'Persoonlijke support',
            'Gratis introductie call'
        ],
        highlight: false,
        buttonText: 'Vraag Offerte',
        buttonLink: 'https://calendly.com/tim-studiolee'
    }
];
