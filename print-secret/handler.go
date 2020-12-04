package function

import (
	"fmt"
	"io/ioutil"
)

// Handle a serverless request
func Handle(req []byte) string {
	out, err := ioutil.ReadFile("/var/openfaas/secrets/openfaas-platform")

	if err != nil {
		return fmt.Sprintf("error: %s", err.Error())
	}

	return fmt.Sprintf("Secret: %s", string(out))
}
