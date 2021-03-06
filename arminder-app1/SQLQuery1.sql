USE [Student]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 10/16/2017 12:00:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Class] [int] NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[RollNumber] [int] NOT NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Students] ON 

GO
INSERT [dbo].[Students] ([Id], [Class], [FirstName], [LastName], [RollNumber]) VALUES (1, 1, N'Arminder', N'Singh', 10829)
GO
INSERT [dbo].[Students] ([Id], [Class], [FirstName], [LastName], [RollNumber]) VALUES (2, 1, N'Ashish ', N'Bhandari', 10830)
GO
INSERT [dbo].[Students] ([Id], [Class], [FirstName], [LastName], [RollNumber]) VALUES (3, 1, N'Ajay', N'Kumar', 10831)
GO
SET IDENTITY_INSERT [dbo].[Students] OFF
GO
