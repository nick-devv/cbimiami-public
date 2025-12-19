"use client";

import { useState, useMemo, useCallback } from "react";
import SearchBar from "@/components/common/SearchBar";
import CourseCard, { CourseType } from "@/components/common/CourseCard";
import CourseFilterClient, { FilterGroup } from "@/components/filters/CourseFilterClient";

interface Course {
  id: number;
  title: string;
  slug: string;
  imageUrl?: string;
  date?: string; 
  
  courseType?: CourseType;
  courseTypeLabel?: string;
  courseTypeIconUrl?: string;
  
  area_interesse?: string[];
  duracao_curso?: string[];
  tempo_acesso?: string[];
}

interface CategoryGroup {
  category: string;
  categorySlug?: string;
  categoryType?: CourseType;
  categoryIconUrl?: string;
  courses: Course[];
}

interface CoursesContentProps {
  groups: CategoryGroup[];
  filters: FilterGroup[];
  searchPlaceholder?: string;
}

function getCourseTypeFromSlug(slug?: string): CourseType {
  if (!slug) return "pos-graduacao";
  
  const normalizedSlug = slug.toLowerCase();
  
  if (normalizedSlug.includes("pos-graduacao") || normalizedSlug.includes("pos-graduação")) {
    return "pos-graduacao";
  }
  if (normalizedSlug.includes("extensao") || normalizedSlug.includes("extensão")) {
    return "extensao";
  }
  if (normalizedSlug.includes("profissionalizante")) {
    return "profissionalizante";
  }
  
  return "pos-graduacao";
}

function sortCourses(courses: Course[], sortValue: string): Course[] {
  const sorted = [...courses];
  
  switch (sortValue) {
    case "date-desc":
      return sorted.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA; 
      });
    case "date-asc":
      return sorted.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateA - dateB; 
      });
    case "title-asc":
      return sorted.sort((a, b) => 
        a.title.localeCompare(b.title, 'pt-BR')
      );
    case "title-desc":
      return sorted.sort((a, b) => 
        b.title.localeCompare(a.title, 'pt-BR')
      );
    default:
      return sorted;
  }
}

export function CoursesContent({
  groups,
  filters,
  searchPlaceholder = "Busque pelo curso",
}: CoursesContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [sortBy, setSortBy] = useState("date-desc");

  const handleFilterChange = useCallback((selection: Record<string, string>) => {
    setSelectedFilters(selection);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
  }, []);

  const filteredGroups = useMemo(() => {
    let result = groups;

    if (searchTerm.trim()) {
      const normalizedSearch = searchTerm.toLowerCase().trim();
      result = result
        .map((group) => ({
          ...group,
          courses: group.courses.filter((course) =>
            course.title.toLowerCase().includes(normalizedSearch)
          ),
        }))
        .filter((group) => group.courses.length > 0);
    }

    const activeFilters = Object.entries(selectedFilters).filter(
      ([, value]) => value && value !== ""
    );

    if (activeFilters.length > 0) {
      result = result
        .map((group) => ({
          ...group,
          courses: group.courses.filter((course) => {
            
            return activeFilters.every(([taxonomy, value]) => {
              const courseTaxonomies = course[taxonomy as keyof Course];

              if (!courseTaxonomies || !Array.isArray(courseTaxonomies)) {
                return false;
              }

              return courseTaxonomies.includes(value);
            });
          }),
        }))
        .filter((group) => group.courses.length > 0);
    }

    result = result.map((group) => ({
      ...group,
      courses: sortCourses(group.courses, sortBy),
    }));

    return result;
  }, [groups, searchTerm, selectedFilters, sortBy]);

  const hasResults = filteredGroups.some((group) => group.courses.length > 0);
  const hasActiveFilters = searchTerm.trim() || Object.values(selectedFilters).some(v => v);

  const clearAllFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedFilters({});
    setSortBy("date-desc");
  }, []);

  return (
    <div className="space-y-10">
      {}
      <SearchBar
        placeholder={searchPlaceholder}
        value={searchTerm}
        onChange={setSearchTerm}
      />

      {}
      <CourseFilterClient 
        filters={filters} 
        onChange={handleFilterChange}
        onSortChange={handleSortChange}
        selectedValues={selectedFilters}
        selectedSort={sortBy}
      />

      {}
      {hasResults ? (
        <div className="space-y-[60px]">
          {filteredGroups.map((group) => {
            
            const categoryType = group.categoryType || getCourseTypeFromSlug(group.categorySlug);
            
            return (
              <div key={group.category} className="flex flex-col gap-5">
                <h3 className="text-3xl font-semibold text-primary-dark">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {group.courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      imageUrl={course.imageUrl || "/cursoCat01.png"}
                      type={course.courseType || categoryType}
                      typeLabel={course.courseTypeLabel}
                      typeIconUrl={course.courseTypeIconUrl || group.categoryIconUrl}
                      href={`/curso/${course.slug}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          <svg
            className="h-16 w-16 text-primary/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="text-lg text-primary-dark/60">
            {searchTerm 
              ? `Nenhum curso encontrado para "${searchTerm}"`
              : "Nenhum curso encontrado com os filtros selecionados"
            }
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-md font-semibold text-primary underline hover:text-primary-dark"
            >
              Limpar filtros
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default CoursesContent;
