// This file is auto-generated by @hey-api/openapi-ts

export type Body_login_login_access_token = {
  grant_type?: string | null;
  username: string;
  password: string;
  scope?: string;
  client_id?: string | null;
  client_secret?: string | null;
};

export type HTTPValidationError = {
  detail?: Array<ValidationError>;
};

// Todo
export type TodoCreate = {
  title: string;
  desc?: string | null;
};

export type TodoPublic = {
  title: string
  desc?: string | null
  id: string
  owner_id: string
  status: 'pending' | 'completed' | 'in_progress'
  created_at: string
  updated_at: string
}

export type TodosPublic = {
  data: Array<TodoPublic>;
  count: number;
};

export type TodoUpdate = {
  title?: string | null;
  desc?: string | null;
  status?: 'pending' | 'completed' | 'in_progress' | null;
};

export type CollaboratorTodoUpdate = {
  title?: string | null;
  desc?: string | null;
  status?: 'pending' | 'accepted' | 'rejected' | null;
};

// SubTodo
export type SubTodoCreate = {
  title: string;
  desc?: string | null;
  todo_id: string;
};

export type SubTodoPublic = {
  title: string;
  desc?: string | null;
  id: string;
  todo_id: string;
  status: 'pending' | 'completed' | 'in_progress' | null;
};

export type SubTodosPublic = {
  data: Array<SubTodoPublic>;
  count: number;
};

export type SubTodoUpdate = {
  title?: string;
  desc?: string | null;
  status?: 'pending' | 'completed' | 'in_progress' | null;
};

export type Message = {
  message: string;
};

export type NewPassword = {
  token: string;
  new_password: string;
};

export type Token = {
  access_token: string;
  token_type?: string;
};

export type UpdatePassword = {
  current_password: string;
  new_password: string;
};

export type UserCreate = {
  email: string;
  is_active?: boolean;
  is_superuser?: boolean;
  full_name?: string | null;
  password: string;
};

export type UserPublic = {
  email: string
  is_active?: boolean
  is_superuser?: boolean
  full_name?: string | null
  id: string
  invite_code?: string
}

export type CollaboratorInformation = {
  id: string
  email: string
  full_name?: string | null
  invite_code?: string
}

export type UserRegister = {
  email: string;
  password: string;
  full_name?: string | null;
};

export type UsersPublic = {
  data: Array<UserPublic>;
  count: number;
};

export type UserUpdate = {
  email?: string | null;
  is_active?: boolean;
  is_superuser?: boolean;
  full_name?: string | null;
  password?: string | null;
};

export type UserUpdateMe = {
  full_name?: string | null;
  email?: string | null;
};

export type ValidationError = {
  loc: Array<string | number>;
  msg: string;
  type: string;
};

// Todo
export type TodosReadTodosData = {
  search?: string
  limit?: number
  skip?: number
}

export type TodosReadTodosResponse = TodosPublic;

export type TodosReadCollaboratorTodosData = {
  limit?: number
  skip?: number
  user_id: string
}

export type ConfirmCollaborateTodosData = {
  limit?: number
  skip?: number
  todo_id: string
  requestBody: CollaboratorTodoUpdate;
}

export type ConfirmCollaborateTodosResponse = Message

export type TodosReadCollaboratorTodosResponse = TodosPublic

export type TodosCreateTodoData = {
  requestBody: TodoCreate;
};

export type TodosCreateTodoResponse = TodoPublic;

export type TodosReadTodoData = {
  id: string;
};

export type TodosReadTodoResponse = TodoPublic;

export type TodosUpdateTodoData = {
  id: string;
  requestBody: TodoUpdate;
};

export type TodosUpdateTodoResponse = TodoPublic;

export type TodosDeleteTodoData = {
  id: string;
};

export type TodosDeleteTodoResponse = Message;

export type TodoUpdateMultiple = {
  todo_ids: string[];
  status: 'pending' | 'completed' | 'in_progress';
};

export type TodosUpdateMultipleTodosData = {
  requestBody: TodoUpdateMultiple;
};

export type TodosUpdateMultipleTodosResponse = TodoPublic[];
// SubTodo
export type SubTodosReadSubTodosData = {
  limit?: number;
  skip?: number;
};


export type SubTodosReadSubTodosResponse = SubTodosPublic;

export type SubTodosCreateSubTodoData = {
  todo_id: string;
  requestBody: SubTodoCreate;
};

export type SubTodosCreateSubTodoResponse = SubTodoPublic;

export type SubTodosReadSubTodoData = {
  todo_id: string;
};

export type SubTodosReadSubTodoResponse = SubTodosPublic;

export type SubTodosUpdateSubTodoData = {
  id: string;
  todo_id: string;
  requestBody: SubTodoUpdate;
};

export type SubTodosUpdateSubTodoResponse = SubTodoPublic;

export type SubTodosDeleteSubTodoData = {
  todo_id: string;
  id: string;
};

export type SubTodosDeleteSubTodoResponse = Message;

export type LoginLoginAccessTokenData = {
  formData: Body_login_login_access_token;
};

export type LoginLoginAccessTokenResponse = Token;

export type LoginTestTokenResponse = UserPublic;

export type LoginRecoverPasswordData = {
  email: string;
};

export type LoginRecoverPasswordResponse = Message;

export type LoginResetPasswordData = {
  requestBody: NewPassword;
};

export type LoginResetPasswordResponse = Message;

export type LoginRecoverPasswordHtmlContentData = {
  email: string;
};

export type LoginRecoverPasswordHtmlContentResponse = string;

export type UsersReadUsersData = {
  limit?: number;
  skip?: number;
};

export type UsersReadUsersResponse = UsersPublic;

export type UsersCreateUserData = {
  requestBody: UserCreate;
};

export type UsersCreateUserResponse = UserPublic;

export type UsersReadUserMeResponse = UserPublic;

export type UsersDeleteUserMeResponse = Message;

export type UsersUpdateUserMeData = {
  requestBody: UserUpdateMe;
};

export type UsersUpdateUserMeResponse = UserPublic;

export type UsersUpdatePasswordMeData = {
  requestBody: UpdatePassword;
};

export type UsersUpdatePasswordMeResponse = Message;

export type UsersRegisterUserData = {
  requestBody: UserRegister;
};

export type UsersRegisterUserResponse = UserPublic;

export type UsersReadUserByIdData = {
  userId: string;
};

export type UsersReadUserByIdResponse = UserPublic;

export type UsersUpdateUserData = {
  requestBody: UserUpdate;
  userId: string;
};

export type UsersUpdateUserResponse = UserPublic;

export type UsersDeleteUserData = {
  userId: string;
};

export type UsersDeleteUserResponse = Message;

export type UtilsTestEmailData = {
  emailTo: string;
};

export type UtilsTestEmailResponse = Message;

export type UtilsHealthCheckResponse = boolean

export interface TodosAddCollaboratorData {
  todo_id: string;
  invite_code: string;
}

export interface TodosAddCollaboratorResponse {
  message: string;
}

export type CollaboratorLeaveTodoData = {
  id: string
}

export type CollaboratorLeaveTodoResponse = Message
