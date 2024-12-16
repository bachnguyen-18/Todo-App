// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type {
  TodosReadTodosData,
  TodosReadTodosResponse,
  TodosCreateTodoData,
  TodosCreateTodoResponse,
  TodosReadTodoData,
  TodosReadTodoResponse,
  TodosUpdateTodoData,
  TodosUpdateTodoResponse,
  TodosDeleteTodoData,
  TodosDeleteTodoResponse,
  SubTodosReadSubTodosData,
  SubTodosReadSubTodosResponse,
  SubTodosCreateSubTodoData,
  SubTodosCreateSubTodoResponse,
  SubTodosReadSubTodoData,
  SubTodosReadSubTodoResponse,
  SubTodosUpdateSubTodoData,
  SubTodosUpdateSubTodoResponse,
  SubTodosDeleteSubTodoData,
  SubTodosDeleteSubTodoResponse,
  LoginLoginAccessTokenData,
  LoginLoginAccessTokenResponse,
  LoginTestTokenResponse,
  LoginRecoverPasswordData,
  LoginRecoverPasswordResponse,
  LoginResetPasswordData,
  LoginResetPasswordResponse,
  LoginRecoverPasswordHtmlContentData,
  LoginRecoverPasswordHtmlContentResponse,
  UsersReadUsersData,
  UsersReadUsersResponse,
  UsersCreateUserData,
  UsersCreateUserResponse,
  UsersReadUserMeResponse,
  UsersDeleteUserMeResponse,
  UsersUpdateUserMeData,
  UsersUpdateUserMeResponse,
  UsersUpdatePasswordMeData,
  UsersUpdatePasswordMeResponse,
  UsersRegisterUserData,
  UsersRegisterUserResponse,
  UsersReadUserByIdData,
  UsersReadUserByIdResponse,
  UsersUpdateUserData,
  UsersUpdateUserResponse,
  UsersDeleteUserData,
  UsersDeleteUserResponse,
  UtilsTestEmailData,
  UtilsTestEmailResponse,
  UtilsHealthCheckResponse,
  TodosUpdateMultipleTodosResponse,
  TodosUpdateMultipleTodosData,
} from './types.gen';
  TodosAddCollaboratorResponse,
  TodosReadCollaboratorTodosData,
  TodosReadCollaboratorTodosResponse,
  CollaboratorInformation,
  Message,
  ConfirmCollaborateTodosData,
  ConfirmCollaborateTodosResponse
} from "./types.gen";


// Todo
export class TodosService {
  /**
 * Add Collaborator
 * Add collaborator to todo.
 * @param data The data for the request.
 * @param data.collaborator_invite_code - Mã mời cộng tác viên.
 * @returns TodosAddCollaboratorResponse Successful Response
 * @throws ApiError
 */
  public static inviteCollaborator(
    data: {todo_id: string, invite_code: string },
  ): CancelablePromise<TodosAddCollaboratorResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/todos/{todo_id}/invite",
      path: {
        todo_id: data.todo_id
      },
      mediaType: "application/json",
      body: { invite_code: data.invite_code },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
 * Get Collaborators for Todo
 * Lấy danh sách cộng tác viên của một Todo.
 * @param data The data for the request.
 * @param data.todo_id - ID của Todo cần lấy danh sách cộng tác viên
 * @returns Array of Users Successful Response
 * @throws ApiError
 */
public static getCollaboratorsForTodo(
  data: { todo_id: string },
): CancelablePromise<TodosAddCollaboratorResponse[]> {
  return __request(OpenAPI, {
    method: "GET",
    url: "/api/v1/todos/{todo_id}/collaborators",
    path: {
      todo_id: data.todo_id,
    },
    errors: {
      422: "Validation Error",
    },
  })
}


/**
 * Remove Collaborator from Todo
 * Xóa cộng tác viên khỏi Todo.
 * @param data The data for the request.
 * @param data.todo_id - ID của Todo cần xóa cộng tác viên
 * @param data.collaborator_user_id - ID của người dùng cộng tác viên
 * @returns TodosRemoveCollaboratorResponse Successful Response
 * @throws ApiError
 */
public static removeCollaboratorFromTodo(
  data: { todo_id: string, collaborator_user_id: string },
): CancelablePromise<TodosAddCollaboratorResponse> {
  return __request(OpenAPI, {
    method: "DELETE",
    url: "/api/v1/todos/{todo_id}/collaborators/{user_id}/remove",
    path: {
      todo_id: data.todo_id,
      user_id: data.collaborator_user_id,
    },
    errors: {
      422: "Validation Error",
    },
  })
}


public static leaveFromCollaboratorTodo(
  data: { todo_id: string },
): CancelablePromise<TodosAddCollaboratorResponse> {
  return __request(OpenAPI, {
    method: "DELETE",
    url: "/api/v1/todos/{todo_id}/leave_collaborate",
    path: {
      todo_id: data.todo_id,
    },
    errors: {
      422: "Validation Error",
    }
})
}

public static ListCollaboratorsFromTodo(
  data: { todo_id: string },
): CancelablePromise<CollaboratorInformation[]> {
  return __request(OpenAPI, {
    method: "GET",
    url: "/api/v1/todos/{todo_id}/collaborators/all-collaborators",
    path: {
      todo_id: data.todo_id,
    },
    errors: {
      422: "Validation Error",
    }
})
}


/**
 * Check Access for Todo
 * Kiểm tra quyền truy cập của người dùng đối với Todo.
 * @param data The data for the request.
 * @param data.todo_id - ID của Todo cần kiểm tra quyền truy cập
 * @returns Message Successful Response
 * @throws ApiError
 */
public static checkAccessForTodo(
  data: { todo_id: string },
): CancelablePromise<Message> {
  return __request(OpenAPI, {
    method: "GET",
    url: "/api/v1/todos/{todo_id}/access",
    path: {
      todo_id: data.todo_id,
    },
    errors: {
      422: "Validation Error",
    },
  })
}
public static getTodoForCollaborator(
  data: TodosReadCollaboratorTodosData 
): CancelablePromise<TodosReadCollaboratorTodosResponse> {
  console.log(data)
  return __request(OpenAPI, {
    method: "GET",
    url: "/api/v1/todos/collaborated/all-todos",
    query: { 
      skip: data.skip,
      limit: data.limit
    },
    errors: {
      400: "Validation Error",
    },
  })
}

public static getPendingTodoForCollaborator(
  data: TodosReadCollaboratorTodosData 
): CancelablePromise<TodosReadCollaboratorTodosResponse> {
  console.log(data)
  return __request(OpenAPI, {
    method: "GET",
    url: "/api/v1/todos/pending-collaborated/get-todos",
    query: { 
      skip: data.skip,
      limit: data.limit
    },
    errors: {
      400: "Validation Error",
    },
  })
}

public static ConfirmCollaborateTodo(
  data: ConfirmCollaborateTodosData 
): CancelablePromise<ConfirmCollaborateTodosResponse> {
  console.log(data)
  return __request(OpenAPI, {
    method: "PUT",
    url: `/api/v1/todos/${data.todo_id}/confirm-collaborated`,
    query: { 
      skip: data.skip,
      limit: data.limit
    },

    body: data.requestBody,
    errors: {
      400: "Validation Error",
    },
  })
}

  /**
   * Read Todos
   * Retrieve items.
   * @param data The data for the request.
   * @param data.skip
   * @param data.limit
   * @returns ItemsPublic Successful Response
   * @throws ApiError
   */
  public static readTodos(
    data: TodosReadTodosData = {}
  ): CancelablePromise<TodosReadTodosResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/todos/',
      query: {
        search: data.search,
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Create Todo
   * Create new todo.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns TodoPublic Successful Response
   * @throws ApiError
   */
  public static createTodo(
    data: TodosCreateTodoData
  ): CancelablePromise<TodosCreateTodoResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/todos/',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Read Todo
   * Get todo by ID.
   * @param data The data for the request.
   * @param data.id
   * @returns TodoPublic Successful Response
   * @throws ApiError
   */
  public static readItem(
    data: TodosReadTodoData
  ): CancelablePromise<TodosReadTodoResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/todos/{id}',
      path: {
        id: data.id,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Update Todo
   * Update an todo.
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns TodoPublic Successful Response
   * @throws ApiError
   */
  public static updateTodo(
    data: TodosUpdateTodoData
  ): CancelablePromise<TodosUpdateTodoResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/v1/todos/{id}',
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Delete Todo
   * Delete an todo.
   * @param data The data for the request.
   * @param data.id
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteTodo(
    data: TodosDeleteTodoData
  ): CancelablePromise<TodosDeleteTodoResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/v1/todos/{id}',
      path: {
        id: data.id,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  public static updateMultipleTodos(
    data: TodosUpdateMultipleTodosData
  ): CancelablePromise<TodosUpdateMultipleTodosResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/api/v1/todos/update_multiple_todos',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }
}

// SubTodo
export class SubTodosService {
  /**
   * Read Sub Todos
   * Retrieve items.
   * @param data The data for the request.
   * @param data.subtodoId
   */
  public static readSubTodos(
    data: SubTodosReadSubTodosData
  ): CancelablePromise<SubTodosReadSubTodosResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/subtodos/',
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Create Sub Todo
   * Create a new subtodo.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SubTodoPublic Successful Response
   * @throws ApiError
   */
  public static createSubTodo(
    data: SubTodosCreateSubTodoData
  ): CancelablePromise<SubTodosCreateSubTodoResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: `/api/v1/todos/${data.todo_id}/subtodos/`,
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Read Sub Todo
   * Get sub todo by ID.
   * @param data The data for the request.
   * @param data.id
   * @returns SubTodoPublic Successful Response
   * @throws ApiError
   */
  public static getSubTodoByTodoId(
    data: SubTodosReadSubTodoData
  ): CancelablePromise<SubTodosReadSubTodoResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: `/api/v1/todos/${data.todo_id}/subtodos`,
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Update Sub Todo
   * Update a sub todo.
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns SubTodoPublic Successful Response
   * @throws ApiError
   */
  public static  updateSubTodo(
    data: SubTodosUpdateSubTodoData
  ): CancelablePromise<SubTodosUpdateSubTodoResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: `/api/v1/todos/${data.todo_id}/subtodos/{id}`,
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Delete SubTodo
   * Delete a sub todo.
   * @param data The data for the request.
   * @param data.id
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteSubTodo(
    data: SubTodosDeleteSubTodoData
  ): CancelablePromise<SubTodosDeleteSubTodoResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: `/api/v1/todos/${data.todo_id}/subtodos/{id}`,
      path: {
        id: data.id,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }




}

export class LoginService {
  /**
   * Login Access Token
   * OAuth2 compatible token login, get an access token for future requests
   * @param data The data for the request.
   * @param data.formData
   * @returns Token Successful Response
   * @throws ApiError
   */
  public static loginAccessToken(
    data: LoginLoginAccessTokenData
  ): CancelablePromise<LoginLoginAccessTokenResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/login/access-token',
      formData: data.formData,
      mediaType: 'application/x-www-form-urlencoded',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Test Token
   * Test access token
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static testToken(): CancelablePromise<LoginTestTokenResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/login/test-token',
    });
  }

  /**
   * Recover Password
   * Password Recovery
   * @param data The data for the request.
   * @param data.email
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static recoverPassword(
    data: LoginRecoverPasswordData
  ): CancelablePromise<LoginRecoverPasswordResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/password-recovery/{email}',
      path: {
        email: data.email,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Reset Password
   * Reset password
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static resetPassword(
    data: LoginResetPasswordData
  ): CancelablePromise<LoginResetPasswordResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/reset-password/',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Recover Password Html Content
   * HTML Content for Password Recovery
   * @param data The data for the request.
   * @param data.email
   * @returns string Successful Response
   * @throws ApiError
   */
  public static recoverPasswordHtmlContent(
    data: LoginRecoverPasswordHtmlContentData
  ): CancelablePromise<LoginRecoverPasswordHtmlContentResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/password-recovery-html-content/{email}',
      path: {
        email: data.email,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }
}

export class UsersService {
  /**
   * Read Users
   * Retrieve users.
   * @param data The data for the request.
   * @param data.skip
   * @param data.limit
   * @returns UsersPublic Successful Response
   * @throws ApiError
   */
  public static readUsers(
    data: UsersReadUsersData = {}
  ): CancelablePromise<UsersReadUsersResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/',
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Create User
   * Create new user.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static createUser(
    data: UsersCreateUserData
  ): CancelablePromise<UsersCreateUserResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/users/',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Read User Me
   * Get current user.
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static readUserMe(): CancelablePromise<UsersReadUserMeResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/me',
    });
  }

  /**
   * Delete User Me
   * Delete own user.
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteUserMe(): CancelablePromise<UsersDeleteUserMeResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/v1/users/me',
    });
  }

  /**
   * Update User Me
   * Update own user.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static updateUserMe(
    data: UsersUpdateUserMeData
  ): CancelablePromise<UsersUpdateUserMeResponse> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/v1/users/me',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Update Password Me
   * Update own password.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static updatePasswordMe(
    data: UsersUpdatePasswordMeData
  ): CancelablePromise<UsersUpdatePasswordMeResponse> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/v1/users/me/password',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Register User
   * Create new user without the need to be logged in.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static registerUser(
    data: UsersRegisterUserData
  ): CancelablePromise<UsersRegisterUserResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/users/signup',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Read User By Id
   * Get a specific user by id.
   * @param data The data for the request.
   * @param data.userId
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static readUserById(
    data: UsersReadUserByIdData
  ): CancelablePromise<UsersReadUserByIdResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/users/{user_id}',
      path: {
        user_id: data.userId,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Update User
   * Update a user.
   * @param data The data for the request.
   * @param data.userId
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static updateUser(
    data: UsersUpdateUserData
  ): CancelablePromise<UsersUpdateUserResponse> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/api/v1/users/{user_id}',
      path: {
        user_id: data.userId,
      },
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Delete User
   * Delete a user.
   * @param data The data for the request.
   * @param data.userId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteUser(
    data: UsersDeleteUserData
  ): CancelablePromise<UsersDeleteUserResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/api/v1/users/{user_id}',
      path: {
        user_id: data.userId,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }
}

export class UtilsService {
  /**
   * Test Email
   * Test emails.
   * @param data The data for the request.
   * @param data.emailTo
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static testEmail(
    data: UtilsTestEmailData
  ): CancelablePromise<UtilsTestEmailResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v1/utils/test-email/',
      query: {
        email_to: data.emailTo,
      },
      errors: {
        422: 'Validation Error',
      },
    });
  }

  /**
   * Health Check
   * @returns boolean Successful Response
   * @throws ApiError
   */
  public static healthCheck(): CancelablePromise<UtilsHealthCheckResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v1/utils/health-check/',
    });
  }
}
