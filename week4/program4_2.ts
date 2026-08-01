// Namespace Example

namespace IdentityCheck {

    const idLength: number = 12;

    export function validateID(id: string): boolean {
        let isNumeric = /^[0-9]+$/.test(id);
        return isNumeric && id.length === idLength;
    }

    export function validateCode(code: string): boolean {
        let pattern = /^[A-Z]{3}[0-9]{3}$/;
        return pattern.test(code.toUpperCase());
    }

    export namespace Charges {
        export function calculateTax(amount: number): number {
            return amount * 0.15; // 15% tax
        }
    }
}

// Usage
let myId = "123456789012";
console.log("Valid ID:", IdentityCheck.validateID(myId));

console.log("Valid Code:", IdentityCheck.validateCode("abc123"));

console.log("Tax:", IdentityCheck.Charges.calculateTax(1000));