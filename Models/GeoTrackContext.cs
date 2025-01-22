using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GeoTrack_Services.Models;

public partial class GeoTrackContext : DbContext
{
    public GeoTrackContext()
    {
    }

    public GeoTrackContext(DbContextOptions<GeoTrackContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TblClient> TblClients { get; set; }

    public virtual DbSet<TblLogin> TblLogins { get; set; }

    public virtual DbSet<TblPayment> TblPayments { get; set; }

    public virtual DbSet<TblPaymentType> TblPaymentTypes { get; set; }

    public virtual DbSet<TblVisitSurvey> TblVisitSurveys { get; set; }

    public virtual DbSet<TbpRole> TbpRoles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=JAVIERDIAZ\\SQLEXPRESS;Initial Catalog=GeoTrack;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TblClient>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tbl_clie__3213E83FD73A1C3B");

            entity.ToTable("tbl_clients");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.IdCard)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("id_card");
            entity.Property(e => e.Latitude)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("latitude");
            entity.Property(e => e.Longitude)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("longitude");
            entity.Property(e => e.Names)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("names");
            entity.Property(e => e.NumHouse)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("num_house");
            entity.Property(e => e.NumPhone)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("num_phone");
        });

        modelBuilder.Entity<TblLogin>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tbl_logi__3213E83F05424779");

            entity.ToTable("tbl_login");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DateCreation)
                .HasColumnType("datetime")
                .HasColumnName("date_creation");
            entity.Property(e => e.ExpiredDate)
                .HasColumnType("datetime")
                .HasColumnName("expired_date");
            entity.Property(e => e.Imei)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("imei");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Rol).HasColumnName("rol");
            entity.Property(e => e.Token)
                .HasMaxLength(80)
                .IsUnicode(false)
                .HasColumnName("token");
            entity.Property(e => e.User)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("user");
        });

        modelBuilder.Entity<TblPayment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tbl_paym__3213E83F988ED727");

            entity.ToTable("tbl_payments");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AmountQuantity)
                .HasColumnType("money")
                .HasColumnName("amount_quantity");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.Description)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Estate).HasColumnName("estate");
            entity.Property(e => e.NumDocument)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("num_document");
            entity.Property(e => e.PaymentType).HasColumnName("payment_type");
            entity.Property(e => e.Taxes).HasColumnName("taxes");
            entity.Property(e => e.TotalPayment)
                .HasColumnType("money")
                .HasColumnName("total_payment");
        });

        modelBuilder.Entity<TblPaymentType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tbl_paym__3213E83F28FEEB9B");

            entity.ToTable("tbl_payment_type");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Descrip)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("descrip");
            entity.Property(e => e.Key).HasColumnName("key");
        });

        modelBuilder.Entity<TblVisitSurvey>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tbl_visi__3213E83F981055CA");

            entity.ToTable("tbl_visit_survey");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CompanyUser)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("company_user");
            entity.Property(e => e.Cuestion1)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion1");
            entity.Property(e => e.Cuestion10)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion10");
            entity.Property(e => e.Cuestion2)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion2");
            entity.Property(e => e.Cuestion3)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion3");
            entity.Property(e => e.Cuestion4)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion4");
            entity.Property(e => e.Cuestion5)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion5");
            entity.Property(e => e.Cuestion6)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion6");
            entity.Property(e => e.Cuestion7)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion7");
            entity.Property(e => e.Cuestion8)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion8");
            entity.Property(e => e.Cuestion9)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("cuestion9");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.IdCard)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("id_card");
            entity.Property(e => e.Latitude)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("latitude");
            entity.Property(e => e.Longitude)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("longitude");
        });

        modelBuilder.Entity<TbpRole>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tbp_role__3213E83FB740A209");

            entity.ToTable("tbp_roles");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Key).HasColumnName("key");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
