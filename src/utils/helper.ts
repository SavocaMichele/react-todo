/**
 * Formats a date object into a human-readable string.
 * 
 * @example 01 Jan 25
 * @param date - The date to format.
 * @returns The formatted date string.
 */
export function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(undefined, {
        year: '2-digit',
        month: 'short',
        day: '2-digit',
    });
}


export function ucFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

type Coordinate = {
    x: number;
    y: number;
};

export function isCoord(arg: any): arg is Coordinate {
    return (
        typeof arg === 'object' &&
        arg !== null &&
        'x' in arg && typeof arg.x === 'number' &&
        'y' in arg && typeof arg.y === 'number'
    );
}