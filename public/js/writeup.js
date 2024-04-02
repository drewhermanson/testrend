const writeUpHandler = async (event) => {
    event.preventDefault();

    const managerTemp = document.querySelector('#manager').textContent.trim();
    const manager = managerTemp.split('Manager: ')[1];

    const selectedCheckbox = document.querySelector('input[name="checkbox"]:checked');
    const type = selectedCheckbox ? selectedCheckbox.value : null;
    
    const reason = document.querySelector('#reasonDropdown option:checked').value.trim();
    const content = document.querySelector('#commentsTextArea').value.trim();

    const userTemp = document.querySelector('#userDropdown option:checked').value.trim();
    const user_id = parseInt(userTemp.split('option')[1]);

    const acknowledged = false;

    if (type && reason && manager && content) {
        const response = await fetch('/api/users/writeup', {
            method: 'POST',
            body: JSON.stringify({ manager, type, reason, content, user_id, acknowledged }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create writeup');
        }
    }
}

document.querySelector('#writeUpForm').addEventListener('submit', writeUpHandler);



