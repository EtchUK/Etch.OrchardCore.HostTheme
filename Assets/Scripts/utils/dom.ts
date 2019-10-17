export const getFormFieldValue = ($field: Element): string => {
    if ($field instanceof HTMLInputElement) {
        return ($field as HTMLInputElement).value;
    }

    if ($field instanceof HTMLTextAreaElement) {
        return ($field as HTMLTextAreaElement).value;
    }

    if ($field instanceof HTMLSelectElement) {
        return ($field as HTMLSelectElement).value;
    }

    return '';
};

/**
 * Returns whether the provided field has a value.
 */
export const hasFormFieldValue = ($field: Element): boolean => {
    return getFormFieldValue($field) !== '';
};

export const makeSelector = (cssClass: string): string => {
    return `.${cssClass}`;
};
