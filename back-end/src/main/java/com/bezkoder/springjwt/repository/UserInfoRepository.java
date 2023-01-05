package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
}
