import os

def handle(req):
    """handle a request to the function
    Args:
        req (str): request body
    """
    st = ""
    for item, value in os.environ.items():
        st = st + '{}={}\n'.format(item, value)
    return st

