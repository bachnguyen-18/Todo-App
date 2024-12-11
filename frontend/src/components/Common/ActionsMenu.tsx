import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react"
import {  BsThreeDotsVertical } from "react-icons/bs"
import {FiEdit, FiPlus, FiTrash, FiUsers } from "react-icons/fi"

import type { TodoPublic, UserPublic } from "../../client"
import EditUser from "../Admin/EditUser"
import Edittodos from "../todos/Edittodos"
import Delete from "./DeleteAlert"
import InviteCollaborators from "../todos/AddCollaborator"

interface ActionsMenuProps {
  type: string
  value: TodoPublic | UserPublic
  disabled?: boolean
}

const ActionsMenu = ({ type, value, disabled }: ActionsMenuProps) => {
  const editUserModal = useDisclosure()
  const deleteModal = useDisclosure()
  const InviteCollaboratorsModal = useDisclosure()
  const addSubtask = () => {
    console.log("add subtask")
  }
  
  return (
    <>
      <Menu>
        <MenuButton
          isDisabled={disabled}
          as={Button}
          rightIcon={<BsThreeDotsVertical />}
          variant="unstyled"
        />
        <MenuList>
          <MenuItem
            onClick={editUserModal.onOpen}
            icon={<FiEdit fontSize="16px" />}
          >
            Edit {type}
          </MenuItem>

          <MenuItem
            onClick={InviteCollaboratorsModal.onOpen}
            icon={<FiUsers fontSize="16px" />}
            color="unstyled"
          >
            Add collaborators
          </MenuItem>

          <MenuItem
            onClick={addSubtask}
            icon={<FiPlus fontSize="16px" />}
          >
            Add Subtask
          </MenuItem>
          <MenuItem
            onClick={deleteModal.onOpen}
            icon={<FiTrash fontSize="16px" />}
            color="ui.danger"
          >
            Delete {type}
          </MenuItem>
        </MenuList>
        {type === "User" ? (
          <EditUser
            user={value as UserPublic}
            isOpen={editUserModal.isOpen}
            onClose={editUserModal.onClose}
          />
        ) : (
          <Edittodos
            todo={value as TodoPublic}
            isOpen={editUserModal.isOpen}
            onClose={editUserModal.onClose}
          />
        )}
        <Delete
          type={type}
          id={value.id}
          isOpen={deleteModal.isOpen}
          onClose={deleteModal.onClose}
        />
      </Menu>
      
      <InviteCollaborators
        todo_id={value.id}
        isOpen={InviteCollaboratorsModal.isOpen}
        onClose={InviteCollaboratorsModal.onClose}/>
    </>
  )
}

export default ActionsMenu
