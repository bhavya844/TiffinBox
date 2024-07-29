package com.tiffinbox.backend.exceptions.handler;

import com.tiffinbox.backend.dto.response.BasicResponse;
import com.tiffinbox.backend.exceptions.AlreadySubscribedException;
import com.tiffinbox.backend.exceptions.ApiRequestException;
import com.tiffinbox.backend.exceptions.ExpiredJwtTokenException;
import com.tiffinbox.backend.exceptions.NotFoundException;
import com.tiffinbox.backend.exceptions.NotVerifiedException;
import com.tiffinbox.backend.utils.ResponseMessages;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException exception, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        BindingResult result = exception.getBindingResult();
        List<FieldError> fieldErrors = result.getFieldErrors();
        List<String> errors = new ArrayList<>();

        for(FieldError error: fieldErrors){
            errors.add(error.getDefaultMessage());
        }

        BasicResponse response = BasicResponse.builder()
                .fieldErrors(errors)
                .message(exception.getMessage())
                .success(false)
                .timeStamp(LocalDateTime.now())
                .build();

        return handleExceptionInternal(exception, response, headers, status, request);
    }

    @ExceptionHandler(ApiRequestException.class)
    public ResponseEntity<BasicResponse>apiRequestExceptionResponse(ApiRequestException exception){
        BasicResponse response = BasicResponse.builder()
                .message(exception.getMessage())
                .success(false)
                .timeStamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<BasicResponse> notFoundExceptionResponse(NotFoundException exception){
        BasicResponse response = BasicResponse.builder()
                .message(exception.getMessage())
                .success(false)
                .timeStamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @ExceptionHandler(NotVerifiedException.class)
    public ResponseEntity<BasicResponse>forbiddenExceptionResponse(NotVerifiedException exception){
        BasicResponse response = BasicResponse.builder()
                .message(exception.getMessage())
                .success(false)
                .timeStamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<BasicResponse> generalExceptionResponse(Exception exception){
        BasicResponse response = BasicResponse.builder()
                .message(exception.getMessage())
                .success(false)
                .timeStamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    @ExceptionHandler(ExpiredJwtTokenException.class)
    public ResponseEntity<BasicResponse>expiredJwtExceptionResponse(ExpiredJwtTokenException exception){
        BasicResponse response = BasicResponse.builder()
                .message(ResponseMessages.TOKEN_Expired)
                .success(false)
                .timeStamp(LocalDateTime.now())
                .build();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }

    @ExceptionHandler(AlreadySubscribedException.class)
    public ResponseEntity<BasicResponse> alreadySubscribedExceptionHandler(AlreadySubscribedException exception){
        BasicResponse response = BasicResponse.builder()
                .message(exception.getMessage())
                .success(false)
                .timeStamp(LocalDateTime.now())
                .build();

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
