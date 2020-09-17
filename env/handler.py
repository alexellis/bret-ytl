import os

def handle(req):
    st = "Env vars: - \n"
    for item, value in os.environ.items():
        st = st + '{}={}\n'.format(item, value)
    return st
