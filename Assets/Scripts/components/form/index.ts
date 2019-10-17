import { hasFormFieldValue } from '../../utils/dom';

/**
 * Enhances forms to improve UX.
 */
const instance = ($el: Element) => {
    const $submitBtn = $el.querySelector(
        'input[type=submit], button[type=submit]'
    );
    const $fields = $el.querySelectorAll('input, select, textarea');

    const checkEnableSubmitButton = () => {
        if (!$submitBtn) {
            return;
        }

        let allFieldsHaveValue = true;

        $fields.forEach(($field: Element) => {
            if (!hasFormFieldValue($field)) {
                allFieldsHaveValue = false;
            }
        });

        if (allFieldsHaveValue) {
            $submitBtn.removeAttribute('disabled');
            return;
        }

        $submitBtn.setAttribute('disabled', 'disabled');
    };

    if ($submitBtn) {
        $fields.forEach(($field: Element) => {
            $field.addEventListener('input', checkEnableSubmitButton);
        });
    }
};

/**
 * Initialises each element matching the selector.
 */
const form = () => {
    const SELECTOR = '.js-form';

    document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
        instance($el);
    });
};

export default form;
