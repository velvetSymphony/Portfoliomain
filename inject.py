file_to_inject_into = './frontend/public/blog/index.html'
tag_to_replace =  '<h2 id="interests">Interests</h2>'
file_to_read_from = 'vote_template.html'

with open(file=file_to_inject_into, mode='r+') as file:
    lines = file.read()

with open(file=file_to_read_from, mode='r') as file:
    content = file.read()

modified_content = lines.replace(tag_to_replace, content)

with open(file=file_to_inject_into, mode='w') as file:
    file.write(modified_content)

print('injected')
