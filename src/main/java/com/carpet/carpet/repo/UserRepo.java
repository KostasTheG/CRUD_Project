package com.carpet.carpet.repo;

import com.carpet.carpet.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {
}
