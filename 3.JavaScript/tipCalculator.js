const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * 0.05;
        case 'ok':
            return total * 0.15;
        case 'good':
            return total * 0.20;
        case 'excellent':
            return total * 0.30;
        default:
            return total * 0.18;

    }
};

console.log(tipCalculator('ok',1))