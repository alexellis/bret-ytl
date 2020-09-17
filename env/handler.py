import os

def handle(req):
    st = ""
    for item, value in os.environ.items():
        st = st + '{}={}\n'.format(item, value)
    return st
