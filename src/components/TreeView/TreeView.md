The treeView is build with the array of object provide by the `data` props.

| Key         | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| id          | `string` or `number` : Unique identifier of the node             |
| label       | `string` : Node’s label                                          |
| iconStart   | `string` or `node` : Icon display before the node’s label        |
| iconEnd     | `string` or `node` : Icon display at the end of the node         |
| children    | `array of object` : children’s node, when available              |
| hasChildren | `bool` : if the node has children                                |
| isLoading   | `bool` : is the node loading its children                        |
| isClosable  | `bool` : the node will be open and will have no icon to close it |
| isDisabled  | `bool` : the node is fully disabled and cannot be clicked        |
