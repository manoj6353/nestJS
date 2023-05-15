-- CreateTable
CREATE TABLE `cat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `breed` VARCHAR(191) NULL,
    `age` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `photo` VARCHAR(191) NULL,
    `catId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `photo` ADD CONSTRAINT `photo_catId_fkey` FOREIGN KEY (`catId`) REFERENCES `cat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
